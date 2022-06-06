import { Link } from "react-router-dom"

import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"

import { Container } from "./styles"

export function Header() {
  return (
    <Container>
      
      <Link to="/"><h1>RocketMovies</h1></Link>

      <Input  placeholder="Pesquisar pelo título" />

      <div>
        <div>
        <p>Hanyel Chamon</p>
        <span>sair</span>
        </div>
        <Link to="/profile"><img src="https://github.com/hanyelc.png" alt="" /></Link>
      </div>

    </Container>
  )
}