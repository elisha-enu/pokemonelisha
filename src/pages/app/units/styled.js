
import styled from 'styled-components'

export const AppStyled = styled.div`
  height: calc(100vh - 3em);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

export const AppHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: black;
`

export const AppBodyStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
`

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