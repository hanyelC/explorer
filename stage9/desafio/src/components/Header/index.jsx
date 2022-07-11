import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Input } from "../Input"

import { Container } from "./styles"

export function Header({ onSearch }) {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    if (confirm("Deseja realmente sair?")) {
      signOut()
      navigate("/")
    }
  }

  return (
    <Container>

      <Link to="/"><h1>RocketMovies</h1></Link>

      {
        onSearch
          ? <Input
            placeholder="Pesquisar pelo título"
            onChange={(e) => onSearch(e.target.value)}
          />
          : <Input placeholder="Pesquisar pelo título" />
      }


      <div>
        <div>
          <p>{user.name}</p>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile"><img src={avatarUrl} alt="Imagem de perfil do usuário" /></Link>
      </div>

    </Container>
  )
}