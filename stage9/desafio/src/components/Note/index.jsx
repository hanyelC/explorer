import { Container } from "./styles"
import { Tag } from "../Tag"

export function Note({title, rating, description, tags, ...rest}) {
  return (
    <Container {...rest}>
       <h3>{ title }</h3>
       <p>{ rating }</p>

       <p>{ description }</p>

       {
         tags.map(title => (
          <Tag title={title}/>
        ))
       }
    </Container>
  )
}