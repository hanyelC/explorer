import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi"

import { Header } from "../../components/Header"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

import { Container, Content, Tags, Tag } from "./styles"

export function New() {
  return (
    <Container>
      <Header />

      <Content>
        <header>
          <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
          <h2>Novo filme</h2>
        </header>

        <span>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </span>

        <TextArea placeholder="Observações" />

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
          <Button title="Salvar alterações" />
        </footer>

      </Content>
    </Container>
  )
}