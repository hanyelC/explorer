import { Link } from "react-router-dom"

import { Input } from "../Input"

import { Container } from "./styles"
import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut, user } = useAuth()

  function handleSignOut() {
    if(confirm("Deseja realmente sair?"))
      signOut()
  }

  return (
    <Container>
      
      <Link to="/"><h1>RocketMovies</h1></Link>

      <Input  placeholder="Pesquisar pelo título" />

      <div>
        <div>
        <p>{user.name}</p>
        <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile"><img src="https://github.com/hanyelc.png" alt="" /></Link>
      </div>

    </Container>
  )
}