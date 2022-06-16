import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"


import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { Container, Form } from "./styles"

const swal = withReactContent(Swal)

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    if (newLink.trim()) setLinks(prevState => [...prevState, newLink.trim()])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    if (newTag.trim()) setTags(prevState => [...prevState, newTag.trim()])
    setNewTag("")
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return swal.fire({
        icon: "warning",
        title: "Preencha o título"
      })
    }

    if (newLink) {
      return swal.fire({
        icon: "warning",
        title: "Você deixou um link sem confirmação, deseja salvá-lo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: "Não salvar",
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.isConfirmed) handleAddLink()
        if (result.isDenied) setNewLink("")
      })
    }

    if (newTag) {
      return swal.fire({
        icon: "warning",
        title: "Você deixou uma tag sem confirmação, deseja salvá-la?",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: "Não salvar",
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.isConfirmed) handleAddTag()
        if (result.isDenied) setNewTag("")
      })
    }

    try {
      await api.post("/notes", {
        title,
        description,
        tags,
        links
      })

      await swal.fire({
        icon: "success",
        title: "Nota criada com sucesso!",
        timer: 2000,
        timerProgressBar: true
      }).then(() => navigate("/"))


    } catch (error) {

      if (error.response) {
        swal.fire({
          icon: "error",
          title: `${error.response.data.message}`
        })
      }
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
                tags.map((tag, index) => (
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
                onChange={e => setNewTag(e.target.value)}
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