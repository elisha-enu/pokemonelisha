
import styled from 'styled-components'
import { AppHeaderStyled  } from '../../styled'

export const HeaderStyled = styled(AppHeaderStyled)`
  display: inline-flex;
  justify-content: flex-start;

  > button {
    margin-left: 16px;
  }
  border-bottom: 1px solid #1b1c21;
  padding-bottom: 8px;
  margin-bottom: 8px;
`

export const BodyStyled = styled.div`
  width: 100%;
`

export const ButtonStyled = styled.button`
  background: pink;
  height: 32px;
  min-width: 72px;
  color: black;
  border-radius: 20px;
  outline: none;
  border: 1px solid red;
  
  :hover {
    background: red;
    cursor: pointer;
  }
`

export const PokemonListStyled = styled.div`
  border: 1px solid white;
  width: 80%;
  margin: 2px;
`

export const SegmenCatchStyled = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;

  >button {
    margin-left: 16px;
  }
`

export const GridStyled = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto auto auto;
`

export const ContentBodyStyled = styled.div`
  padding-top: 24px;
`