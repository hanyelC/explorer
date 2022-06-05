import { Container } from "./styles"

export function ButtonText({ title, icon:Icon, to, ...rest}) {
  return (
    <Container to={to} {...rest}>
      
      {Icon && <Icon /> }
      
      {title}
      
    </Container>
  )
}