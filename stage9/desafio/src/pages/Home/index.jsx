import { Link } from "react-router-dom"

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
          <Link to="new"><Button icon={FiPlus} title="Adicionar filme" /></Link>
        </header>

      <Notes>

        <Note to="details/1" title="Interestellar" description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur dolorem aperiam aliquid suscipit ratione. Repellat totam, delectus perspiciatis aspernatur, accusantium nisi officiis et alias nesciunt similique ratione in accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur dolorem aperiam aliquid suscipit ratione. Repellat totam, delectus perspiciatis aspernatur, accusantium nisi officiis et alias nesciunt similique ratione in accusamus.lorem ipsum" rating={4} tags={["Ação", "aventura"]}/>
        <Note to="details/1" title="Foo baz" description="lorem ipsum" rating={4} tags={["Foo", "Baz"]}/>

      </Notes>
      
      </Content>
      
    </Container>
  )
}