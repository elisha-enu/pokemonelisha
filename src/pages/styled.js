
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
    }
`
