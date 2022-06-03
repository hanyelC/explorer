import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"

import { Container } from "./styles"



export function Header() {
  return (
    <Container>
      
      <h1>RocketMovies</h1>

      <Input  placeholder="Pesquisar pelo título" />

      <div>
        <div>
        <p>Hanyel Chamon</p>
        <span>sair</span>
        </div>
        <img src="https://github.com/hanyelc.png" alt="" />
      </div>

    </Container>
  )
}