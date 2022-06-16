import { useState, useEffect } from "react"

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Link } from 'react-router-dom'

import { api } from "../../services/api"

export function Home() {
  const [tags, setTags] = useState([])

  
  useEffect(() => {
    async function fetchTags() {
      const token = localStorage.getItem("@rocketnotes:token")
      api.defaults.headers.authorization = `Bearer ${token}`
      try {
        console.dir(api.defaults.headers.authorization)
        const response = await api.get("/tags")
        setTags(response.data)
        
        console.dir(response)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    
    fetchTags()
  }, [])
  
  return (
    <Container>
      <Brand>
        <Link to="/">
          <h1>Rocketnotes</h1>
        </Link>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive
          />
        </li>
        
        {
          tags && tags.map(tag => (
            <li key={tag.id}>
              <ButtonText title={tag.name} />
            </li>            
          )

          )

        }
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
                { id: 1, name: "React" },
                { id: 2, name: "Node" }
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