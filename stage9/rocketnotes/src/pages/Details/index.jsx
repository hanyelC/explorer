import { Container, Links, Content } from "./styles.js"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Link } from "react-router-dom"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore quos possimus? Voluptatem, aliquid necessitatibus unde quo ratione, magni iusto adipisci rerum laudantium ad sed deleniti, dolore vitae repellendus ipsa?
          </p>


          <Section title="Links úteis">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 1</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Node" />
            <Tag title="Express" />
          </Section>

          <Link to="/">
            <Button to="/" title="Voltar" />
          </Link>

        </Content>
      </main>
    </Container>
  )
}
