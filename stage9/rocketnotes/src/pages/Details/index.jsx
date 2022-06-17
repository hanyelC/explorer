import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

import { api } from "../../services/api.js"

import { Container, Links, Content } from "./styles.js"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  
  const swal = withReactContent(Swal)

  async function handleRemove() {
    let confirmation = await swal.fire({
      icon: "question",
      title: "Deseja realmente exluir a nota?",
      showDenyButton: true,
      confirmButtonText: "Sim, quero excluir!",
      denyButtonText: "Não",
      denyButtonColor: "#7066e0",
      confirmButtonColor: "#dc3741",
      focusDeny: true
    })

    if (confirmation.isConfirmed) {
      try {
        await api.delete(`/notes/${params.id}`)
        await swal.fire({
          icon: "success",
          title: "Nota excluída com sucesso, redirecionando para página inicial em 3 segundos",
          timer: 3000,
          timerProgressBar: true
        })
        navigate("/")

      } catch (error) {
        if(error.response) {
          swal.fire({
            icon: "error",
            title: error.response.data.message
          })

        } else {
          swal.fire({
            icon: "error",
            title: "Ops! Algo deu errado."
          })
        }
      }
    }
  }
  
  useEffect(() => {
    async function fetchNote() {
      try {
        api.defaults.headers.authorization = `Bearer ${localStorage.getItem("@rocketnotes:token")}`

        const response = await api.get(`/notes/${params.id}`)
        setData(response.data)
      } catch (error) {
        if(error.response) {
          await swal.fire({
            icon: "error",
            title: error.response.data.message
          })
          console.log(error.response)
          if(error.response.status === 401)
          swal.fire({
            icon: "info",
            title: "Faça login novamente",
            timer: 3000,
            timerProgressBar: true,
          })
        } else {
          swal.fire({
            icon: "error",
            title: "Ops! Algo deu errado."
          })
        }
      }
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={handleRemove}
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map((link) => (

                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (

                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Link to="/">
              <Button to="/" title="Voltar" />
            </Link>

          </Content>
        </main>
      }
    </Container>
  )
}
