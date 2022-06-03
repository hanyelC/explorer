import { IoStarOutline, IoStar} from "react-icons/io5"

import { Container, Rating } from "./styles"
import { Tag } from "../Tag"

export function Note({title, rating, description, tags, ...rest}) {

  const stars = []

  for(let i= 0; i < 5; i++){
    let star = i < rating ? IoStar : IoStarOutline
    stars.push(star)
  }

  return (
    <Container {...rest}>
       <h3>{ title }</h3>

       <Rating>
        {
          stars.map(
            Star => <Star />
          )
        }
        </Rating>

       <p>{ description }</p>

       {
         tags.map(title => (
          <Tag title={title}/>
        ))
       }
    </Container>
  )
}