import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Brand>
        <Link to="/">
          <h1>Rocketnotes</h1>
        </Link>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>
      </Menu>

      <Search>
        <Input type="text" placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Link to="/details/1">  
          <Note data={{
            title: 'ReactJs ',
            tags: [
              {id: 1, name: "React"},
              {id: 2, name: "Node"}
            ]

          }} />
          </Link>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}