import React from 'react'
import PropTypes from 'prop-types'
import {
  LeftNavbar,
  RightNavbar,
  NavbarStyle,
} from './styled'

export default class Navbar extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: [],
  }

  static Left = ({
    children,
    onClick,
  }) => (
    <LeftNavbar onClick={onClick}>
      {children}
    </LeftNavbar>
  )

  static Right = ({
    children,
    onClick,
  }) => (
    <RightNavbar onClick={onClick}>
      {children}
    </RightNavbar>
  )

  render() {
    const { children } = this.props

    return (
      <NavbarStyle>
        {children}
      </NavbarStyle>
    )
  }
}