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
  console.log(listMyPokemon)
  return (
    <AppStyled>
      <AppHeaderStyled>
        List My Pokemon
      </AppHeaderStyled>
      <AppBodyStyled>
        {
          listMyPokemon.length > 0 ? listMyPokemon.map((list, idx) => (
            <PokemonListStyled key={idx} onClick={() => handleDetailProfile(list.urlPokemon)}>
              <Link to='/detail'>
                {list.name} - nickname: {list.nicknamePokemon}
              </Link>
              <Link to='/list'>
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

ListPokemon.defaultProps = {
  handleDetailProfile: PropTypes.func,
  handleRemovePokemon: PropTypes.func,
  // handleCatchPokemon: PropTypes.func,
  // handleRenameNickname: PropTypes.func,
  
}

ListPokemon.defaultValue = {
  handleDetailProfile: () => {},
  handleRemovePokemon: () => {},
  // handleCatchPokemon: () => {},
  // handleRenameNickname: () => {},
}

export default ListPokemon
