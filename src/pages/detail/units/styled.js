
import styled from 'styled-components'

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

export const AppStyled = styled.div`
  text-align: center;

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`

export const AppHeaderStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const PokemonListStyled = styled.div`
  border: 1px solid white;
  width: 80%;
  margin: 2px;
`