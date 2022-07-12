import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signUp(name, email, password) {
    try {
      await api.post("/users", { name, email, password })
    } catch (error) {
      console.log(error)
      if (error.response)
        alert(error.response.data.message)
    }
  }

  async function signIn(email, password) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      console.log(error)
      if (error.response.data.message) alert(error.response.data.message)
      else alert("Algo deu errado")
    }

  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem("@rocketmovies:token")}`

    if (avatarFile) {
      try {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        const { avatar } = response.data

        user.avatar = avatar

      } catch (error) {
        console.log(error)
      }
    }

    try {

      console.log(user.email)
      await api.put("/users", user)
      alert("perfil atualizado com sucesso")
    } catch (error) {
      console.log(error)
      if (error.response.data.message)
        return alert(error.response.data.message)
      else
        alert("Algo deu errado")
    }

    const newUserData = JSON.parse(localStorage.getItem("@rocketmovies:user"))

    newUserData.avatar = user.avatar ?? newUserData.avatar
    newUserData.name = user.name ?? newUserData.name
    newUserData.email = user.email ?? newUserData.email
    delete newUserData.password

    localStorage.setItem("@rocketmovies:user", JSON.stringify(newUserData))

    setData({ user: newUserData, token: data.token })
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"))
    const token = localStorage.getItem("@rocketmovies:token")

    setData({ user, token })
  }, [])

  return (

    <AuthContext.Provider value={{
      signUp,
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