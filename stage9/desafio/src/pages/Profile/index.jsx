import { useState } from "react"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile(e) {
    e.preventDefault()
    const updatedUser = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    }

    updateProfile({ user: updatedUser, avatarFile })
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    if (!file) return

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header><ButtonText icon={FiArrowLeft} title="Voltar" to="/" /></header>

      <Avatar>
        <img src={avatar} alt="foto usuário" />
        <label htmlFor="avatar">
          <FiCamera />
        </label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={handleChangeAvatar}
        />
      </Avatar>

      <Form>
        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova Senha"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdateProfile}
        />

      </Form>
    </Container>
  )
}