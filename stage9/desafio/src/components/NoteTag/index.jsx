import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function NoteTag({isNew, value, placeholder, onClick, ...rest}) {

  return (
    <Container isNew={isNew}>
      <input
        type="text"
        readOnly={!isNew}
        value={value}
        {...rest}
        placeholder={isNew ? placeholder ? placeholder : "Novo" : ""}
      />
      
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}