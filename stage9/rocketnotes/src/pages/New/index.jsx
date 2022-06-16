import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { Container, Form } from "./styles"


export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")
  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()
  
  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(newLink) {
      if(window.confirm("Você deixou um link sem confirmação, deseja salvá-lo?")) handleAddLink()
      else setNewLink("")
      return
    }

    if(newTag) {
      if(window.confirm("Você deixou uma tag sem confirmação, deseja salvá-la?")) handleAddTag()
      else setNewTag("")
      return
    }

    try {
      await api.post("/notes", {
        title,
        description,
        tags,
        links
      })
      
      alert("Nota criada com sucesso!")
  
      navigate("/")

    } catch (error) {
      
      if(error.response) alert(error.response.data.message)
    }
    

  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            type="text"
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              placeholder="Novo link"
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag,index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                value={newTag}
                onChange={e=> setNewTag(e.target.value)}
                onClick={handleAddTag}  
                placeholder="Nova tag"
              />
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />

        </Form>
      </main>

    </Container>
  )
}