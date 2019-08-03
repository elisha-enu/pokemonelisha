import styled from 'styled-components'

export const PokemonListStyled = styled.div`
  border: 1px solid #ef5350;
  width: 100%;
  margin: 2px;
  padding: 4px;  

  a {
    width: 100%;
    text-decoration: none;
    color: black;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  :hover {
    background: #e94141;
    a {
      color: white;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  
  > button:first-child {
    margin-right: 8px;
  }
`