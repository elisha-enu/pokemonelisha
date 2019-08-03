
import styled from 'styled-components'

export const UlStyled = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 0;
`

export const LiStyled = styled.li`
    display: inline-flex;
    padding: 0 8px;
    height: 100%;
    align-items: center;
    
    :hover{
      background: #e94141;
    }

    a{
      width: 100%;
      height: 100%;
      color: white;
      display: flex;
      align-items: center;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
`

export const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding: 36px;
`

export const AppHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;

  border-bottom: 1px solid #1b1c21;
  padding-bottom: 8px;
  margin-bottom: 8px;
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