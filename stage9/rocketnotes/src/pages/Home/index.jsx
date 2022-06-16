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
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName) {
    if(tagName === "all3333039w8asiupghsacidfhazzzusoihdefdsfohiccc"){
      return setTagsSelected([])
    }
    
    const alreadySelected = tagsSelected.includes(tagName)
    console.log(alreadySelected)

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }


  }
  
  useEffect(() => {
    async function fetchTags() {
      const token = localStorage.getItem("@rocketnotes:token")
      api.defaults.headers.authorization = `Bearer ${token}`
      try {
        const response = await api.get("/tags")
        setTags(response.data)
        
      } catch (error) {
        alert(error.response.data)
      }
    }
    
    fetchTags()
  }, [])
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])
  
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
            onClick={() => handleTagSelected("all3333039w8asiupghsacidfhazzzusoihdefdsfohiccc")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>            
          )

          )

        }
      </Menu>

      <Search>
        <Input
          type="text"
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map( note => (
              <Link
               to={`/details/${note.id}`}
               key={String(note.id)}
              >
                <Note
                  data={{
                    title: note.title,
                    tags: note.tags

                  }}
                />

                
              </Link>
            ))
          }
          
          
          
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}