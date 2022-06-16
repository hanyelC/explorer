import { createContext, useContext, useState, useEffect } from "react"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import { api } from "../services/api"

const AuthContext = createContext({})

  const swal = withReactContent(Swal)

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const {user, token} = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)
      
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({user, token})
    } catch (error) {
      if (error.response) alert(error.response.data.message)
      else alert("Não foi possível entrar.")
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {    
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem("@rocketnotes:token")}`
    
    try {
      
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        
        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data[0].avatar
      }
      
      await api.put("/users", user)
      
      const newUserData = JSON.parse(localStorage.getItem("@rocketnotes:user"))

      newUserData.avatar = user.avatar ?? newUserData.avatar
      newUserData.email = user.email ?? newUserData.email
      newUserData.name = user.name ?? newUserData.name
      delete newUserData.password
      
      localStorage.setItem("@rocketnotes:user", JSON.stringify(newUserData))
      
      setData({ user, token: data.token})
      
      await swal.fire({
        icon: "success",
        title: "Perfil atualizado",
        timer: 2000,
        timerProgressBar: true
      })
      
    } catch (error) {
      if (error.response) alert(error.response.data.message)
      else alert("Não foi possível entrar.")
    }
  }
  
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem("@rocketnotes:user"))
    const token = localStorage.getItem("@rocketnotes:token")
    setData({ user, token})
  }, [])
  
  return (
    <AuthContext.Provider value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}