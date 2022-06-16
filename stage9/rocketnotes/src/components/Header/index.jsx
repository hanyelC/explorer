import { useNavigate } from "react-router-dom"

import { RiShutDownLine } from 'react-icons/ri'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { Container, Profile, Logout } from './style'

export function Header() {
  const { signOut, user } = useAuth()
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate()
  
  return (
    <Container>
      
        <Profile to="/profile">          
          <img
            src={avatarUrl}
            alt="Foto do usuário"
            />

          <div>
            <span>Bem-vindo,</span>
            <strong>{ user.name }</strong>
          </div>
        </Profile>
      

      <Logout onClick={()=> {
        signOut()
        navigate("/")
        }}
      >
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}