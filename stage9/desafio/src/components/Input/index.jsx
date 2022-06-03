import { Container } from "./styles"

export function Input({icon: Icon, placeholder, ...rest}) {
  return (
    <Container>
      {Icon && <Icon />}
      <input
        placeholder={placeholder}
        {...rest} />
    </Container>
  )
}