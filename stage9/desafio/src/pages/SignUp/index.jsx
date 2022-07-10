import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { signUp } = useAuth()

  async function handleSignUp(e) {
    e.preventDefault()

    if (!name) return alert("O campo nome é obrigatório")
    if (!email) return alert("O campo email é obrigatório")
    if (!password) return alert("O campo senha é obrigatório")

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return alert("Formato de email inválido")

    try {
      await signUp(name, email, password)
      alert("Conta criada com sucesso")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />

        <ButtonText to="/" icon={FiArrowLeft} title="Voltar para o login" />
      </Form>

      <Background />

    </Container>
  )
}