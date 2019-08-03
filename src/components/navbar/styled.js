import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  position: relative;
  min-height: 3rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  // align-items: stretch;
  color: white;
  background: #ef5350;
`

export const LeftNavbar = styled.div`
  padding-left: 48px;
  display: inline-flex;
  align-items: center;

  div {
    display: inline-flex;
    align-items: center;

    :not(:last-child) {
      padding-right: 16px;
    } 
  }

`

export const RightNavbar = styled.div`
  padding-right: 48px;
  display: inline-flex;
  align-items: center;
  -webkit-mask-image: linear-gradient(90deg,transparent,#000 20px,#000 90%,transparent);

  div {
    display: inline-flex;
    align-items: center;

    :not(:first-child) {
      padding-left: 16px;
    }
  }
`