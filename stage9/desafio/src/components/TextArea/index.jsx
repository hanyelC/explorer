import { Container } from "./styles"

export function TextArea({placeholder, ...rest}){
  return (
    <Container {...rest} placeholder={placeholder}>

    </Container>
  )
}