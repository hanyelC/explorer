import { Container } from "./styles"

export function Button({ title, isLoading, icon: Icon, ...rest }) {
  return (
    <Container isLoading={isLoading} {...rest}>
      { Icon && <Icon />}
      {isLoading ? "Carregando " : title}
    </Container>
  )
}