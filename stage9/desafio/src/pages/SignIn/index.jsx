import { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()


  async function handleSignIn() {

    try {
      await signIn(email, password)

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => { setEmail(e.target.value)}}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(e) => { setPassword(e.target.value)}}
        />

        <Button
          title="Entrar"
          onClick={(e) => { e.preventDefault(); handleSignIn() }}
        />

        <ButtonText
          to="/register"
          title="Criar conta"
        />
      </Form>

      <Background />

    </Container>
  )
}