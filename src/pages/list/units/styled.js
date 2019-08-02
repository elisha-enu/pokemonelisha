
import styled from 'styled-components'

export const PokemonListStyled = styled.div`
  border: 1px solid #ef5350;
  width: 100%;
  margin: 2px;
  padding: 4px;  
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: black;

    height: 100%;
    display: flex;
    align-items: center;
  }
  :hover {
    background: #e94141;
    a {
      color: white;
    }
  }
`