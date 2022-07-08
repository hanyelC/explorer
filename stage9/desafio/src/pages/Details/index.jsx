import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { FiClock, FiArrowLeft } from "react-icons/fi"
import { IoStarOutline, IoStar } from "react-icons/io5"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

import { Container, Content, Rating, Info, Tags, Description } from "./styles"

export function Details() {
  const [noteData, setNoteData] = useState({})
  const { id } = useParams()
  
  const stars = []

  if(noteData.note) {
    for(let i= 0; i < 5; i++){
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
      console.log(data.tags)
      
    } catch (error) {
      if(error.response) console.log(error.response.data.message)
      else console.log(error)
    }
  }
  
  
  useEffect(() => {
    fetchNoteData()
  }, [])
  
  return (
    <Container>
      <Header />
      { noteData.note ?
        <Content>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" to="/" />

            <div>
              <h2>{noteData.note.title}</h2>
              <Rating>
                { stars.length > 0 ?

                  
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
              <img src={noteData.userData.avatar} alt="" />
              <p>Por {noteData.userData.name}</p>
              <FiClock />
              <span>04/06/2022 às 12:00</span>
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