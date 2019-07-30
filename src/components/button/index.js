import React from 'react'
import { ButtonStyled } from './styled'

const Button = ({ 
  label,
  onClick,
}) => (
  <ButtonStyled onClick={onClick}>
    {label}
  </ButtonStyled>
)

export default Button