import { useState } from "react"

import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

import { Container, Content, Tags, Tag } from "./styles"

export function New() {
  const [title, setTitle] = useState([])
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  async function handleSaveNote(e){
    e.preventDefault()
    
    const token = localStorage.getItem("@rocketmovies:token")
    api.defaults.headers.authorization = `Bearer ${token}`

    try {
      const response = await api.post("/notes", {
        title,
        description,
        rating,
        tags
      })
      console.log(response)
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
        console.log(error.response.data.message)
      } else {
        console.log(error)
        alert("Algo deu errado")
      }
    }
  }

  
  return (
    <Container>
      <Header />

      <Content>
        <header>
          <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
          <h2>Novo filme</h2>
        </header>

        <span>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={e => setRating(Number(e.target.value))}
          />
        </span>

        <TextArea
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

        <Tags>
          <p>Marcadores</p>
          <div>
            <Tag>
              Ação <FiX/>
            </Tag>
            <Tag isNew> Novo marcador <FiPlus /></Tag>
          </div>
        </Tags>

        <footer>
          <Button title="Excluir filme" />
          <Button
            title="Salvar alterações"
            onClick={handleSaveNote}
          />
        </footer>

      </Content>
    </Container>
  )
}