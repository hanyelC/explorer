import { Container, Link } from "./styles"

export function ButtonText({ title, icon:Icon, to, ...rest}) {
  return (
    <Container href={to} {...rest}>
      
      {Icon && <Icon /> }
      
      {title}
      
    </Container>
  )
}