import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format } from "date-fns"

import { FiClock, FiArrowLeft } from "react-icons/fi"
import { IoStarOutline, IoStar } from "react-icons/io5"

import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

import { Container, Content, Rating, Info, Tags, Description } from "./styles"

export function Details() {
  const [noteData, setNoteData] = useState({})

  const { id } = useParams()

  const avatarUrl = noteData.userData && noteData.userData.avatar ? `${api.defaults.baseURL}/files/${noteData.userData.avatar}` : avatarPlaceholder

  const stars = []

  if (noteData.note) {
    for (let i = 0; i < 5; i++) {
      let star = i < noteData.note.rating ? IoStar : IoStarOutline
      stars.push(star)
    }
  }

  async function fetchNoteData() {
    const token = localStorage.getItem("@rocketmovies:token")
    api.defaults.headers.authorization = `Bearer ${token}`

    try {
      const { data } = await api.get(`/notes/${id}`)

      setNoteData(data)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        console.log(error.response.data.message)
      }
      else {
        alert('Algo deu errado, não foi possível acessar os dados da nota')
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchNoteData()
  }, [])

  return (
    <Container>
      <Header />
      {noteData.note ?
        <Content>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" to="/" />

            <div>
              <h2>{noteData.note.title}</h2>
              <Rating>
                {stars.length > 0 ?


                  stars.map((Star, index) => {
                    return (
                      <Star key={index} />
                    )
                  })

                  :
                  <></>
                }
              </Rating>
            </div>

            <Info>
              <img src={avatarUrl} alt="Imagem de perfil do usuário que criou a nota" />
              <p>Por {noteData.userData.name}</p>
              <FiClock />
              <span>{format(new Date(noteData.note.created_at), "dd/MM/yyyy 'às' HH:mm")}</span>
            </Info>
          </header>

          <Tags>
            {
              noteData.tags.map(tag => (
                <Tag
                  key={tag.id}
                  title={tag.name}
                />
              ))
            }
          </Tags>

          <Description>
            {noteData.note.description}
          </Description>

        </Content>
        :
        <p>Loading...</p>
      }
    </Container>
  )
}