import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from './app'
import Detail from './detail'
import ListPokemon from './list'
import Navbar from '../components/navbar'
import { UlStyled, LiStyled } from "./styled"

function PagesRouter() {
  const urlLogo = require('../assets/logo.png')
  return (
    <Router>
      <Navbar>
        <Navbar.Left>
          <div>
            <img src={urlLogo} height="48px" width="120px" alt="logo-pokemon" />
          </div>
        </Navbar.Left>
        <Navbar.Right>
          <UlStyled>
            <LiStyled>
              <Link to="/">Pokemon List</Link>
            </LiStyled>
            <LiStyled>
              <Link to="/detail">Pokemon Detail</Link>
            </LiStyled>
            <LiStyled>
              <Link to="/list">My Pokemon</Link>
            </LiStyled>
          </UlStyled>
        </Navbar.Right>
      </Navbar>
      <>
        <Route exact path="/" component={App} />
        <Route path="/detail" component={Detail} />
        <Route path="/list" component={ListPokemon} />
      </>
    </Router>
  );
}

export default PagesRouter