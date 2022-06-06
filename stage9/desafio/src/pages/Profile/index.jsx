import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  return (
    <Container>
      <header><ButtonText icon={FiArrowLeft} title="Voltar" to="/" /></header>

      <Avatar>
        <img src="https://github.com/hanyelc.png" alt="foto usuário" />
        <label htmlFor="avatar">
          <FiCamera />
        </label>
        <input type="file" name="avatar" id="avatar" />
      </Avatar>

      <Form>
        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova Senha" />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}