import { IoStarOutline, IoStar } from "react-icons/io5"

import { Container, Rating } from "./styles"
import { Tag } from "../Tag"

export function Note({ title, to, rating, description, tags, ...rest }) {

  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rating ? IoStar : IoStarOutline
    stars.push(star)
  }

  return (
    <Container to={to} {...rest}>
      <h3>{title}</h3>

      <Rating>
        {
          stars.map(
            (Star, index) => <Star key={String(index)} />
          )
        }
      </Rating>

      <p>{description}</p>

      {
        tags.map(tag => (
          <Tag
            key={tag.id}
            title={tag.name}
          />
        ))
      }
    </Container>
  )
}