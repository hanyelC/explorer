import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"


import { Container, Content, Notes } from "./styles"
import { Note } from "../../components/Note"
import { api } from "../../services/api"

export function Home() {
  const [notes, setNotes] = useState([])

  async function fetchNotes(title = "") {
    const token = localStorage.getItem("@rocketmovies:token")
    api.defaults.headers.authorization = `Bearer ${token}`

    try {
      const response = await api.get("/notes", { params: { titleSearch: title } })

      setNotes(response.data)

    } catch (error) {
      if (error.response) {
        if (error.response.status === 404)
          return setNotes([])

        alert(error.response.data.message)
      } else {
        alert("Algo deu errado")
      }
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Container>
      <Header onSearch={fetchNotes} />
      <Content >
        <header>
          <h2>Meus filmes</h2>
          <Link to="new"><Button icon={FiPlus} title="Adicionar filme" /></Link>
        </header>

        <Notes>

          {
            notes.length > 0
              ? notes.map(note => (
                <Note
                  key={String(note.id)}
                  to={`details/${note.id}`}
                  title={note.title}
                  description={note.description}
                  rating={note.rating}
                  tags={note.tags}
                />
              ))
              :
              <p>Nenhuma nota por aqui</p>
          }

        </Notes>

      </Content>

    </Container>
  )
}