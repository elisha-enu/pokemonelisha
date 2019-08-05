import React from 'react';
import PropTypes from 'prop-types';
import './styled.js';
import { Link } from "react-router-dom";
import Button from '../../../components/button';
import { AppStyled, AppHeaderStyled, AppBodyStyled } from '../../styled.js';
import { PokemonListStyled } from './styled';

const ListPokemon = ({
  listMyPokemon,
  handleDetailProfile,
  handleRemovePokemon,
}) => {
  return (
    <AppStyled>
      <AppHeaderStyled>
        List My Pokemon
      </AppHeaderStyled>
      <AppBodyStyled>
        {
          listMyPokemon && listMyPokemon.length > 0 ? listMyPokemon.map((list, idx) => (
            <PokemonListStyled key={idx} onClick={() => handleDetailProfile(list.urlPokemon)}>
              <Link to='/pokemonelisha/detail'>
                {list.name} - nickname: {list.nicknamePokemon}
              </Link>
              <Link to='/pokemonelisha/list'>
                <Button label="Release pokemon" onClick={() => handleRemovePokemon(idx)} /><br/>
              </Link>
            </PokemonListStyled>
          )) : 
          (
            <>
              You have no pokemon
            </>
          )
        }
      </AppBodyStyled>
    </AppStyled>
  )
}

ListPokemon.propTypes = {
  handleDetailProfile: PropTypes.func,
  handleRemovePokemon: PropTypes.func,
  
}

ListPokemon.defaultProps = {
  handleDetailProfile: () => {},
  handleRemovePokemon: () => {},
}

export default ListPokemon
