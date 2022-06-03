import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"


import { Container, Content, Notes } from "./styles"
import { Note } from "../../components/Note"


export function Home() {
  return (
    <Container>
      <Header />
      <Content >
        <header>
          <h2>Meus filmes</h2> 
          <Button icon={FiPlus} title="Adicionar filme" />
        </header>

      <Notes>

        <Note title="title" description="lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>
        <Note title="title" description="lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>
        <Note title="title" description="lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>
        <Note title="title" description="lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>
        <Note title="title" description="lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>

      </Notes>
      
      </Content>
      
    </Container>
  )
}