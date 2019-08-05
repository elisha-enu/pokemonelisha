import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from './app'
import Detail from './detail'
import ListPokemon from './list'
import Navbar from '../components/navbar'
import { UlStyled, LiStyled } from "./styled"

function PagesRouter() {
  return (
    <Router>
      <Navbar>
        <Navbar.Left>
        </Navbar.Left>
        <Navbar.Right>
          <UlStyled>
            <LiStyled>
              <Link to="/pokemonelisha">List</Link>
            </LiStyled>
            <LiStyled>
              <Link to="/pokemonelisha/detail">Detail</Link>
            </LiStyled>
            <LiStyled>
              <Link to="/pokemonelisha/list">My Pokemon</Link>
            </LiStyled>
          </UlStyled>
        </Navbar.Right>
      </Navbar>
      <>
        <Route exact path="/pokemonelisha" component={App} />
        <Route path="/pokemonelisha/detail" component={Detail} />
        <Route path="/pokemonelisha/list" component={ListPokemon} />
      </>
    </Router>
  );
}

export default PagesRouter