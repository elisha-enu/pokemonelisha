import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styled.js';
import Button from '../../../components/button';
import { PokemonListStyled, ButtonWrapper } from './styled.js';
import { AppStyled, AppHeaderStyled, AppBodyStyled } from '../../styled';
import { Link } from "react-router-dom";

const App = ({
  listOfPokemon,
  totalPokemon,
  getListOfPokemon,
  handleNextButton,
  handlePrevButton,
  handleDetailProfile,
  offset,
  limit,
}) => {
  useEffect(() => { getListOfPokemon(offset, limit) }, [offset])

  return (
    <AppStyled>
      <AppHeaderStyled>
        List of Pokemon
      </AppHeaderStyled>
      <AppBodyStyled>
        {
          listOfPokemon.map((list, idx) => (
            <PokemonListStyled key={idx} onClick={() => handleDetailProfile(list.url)}>
              <Link to='/detail'>
                {list.name}
              </Link>
            </PokemonListStyled>
          ))
        }
        Total Pokemon: {totalPokemon}
        <ButtonWrapper>
          <Button label="Prev" onClick={() => { offset - limit >=0 && handlePrevButton()} }/>
          <Button label="Next" onClick={() => { offset + limit < totalPokemon && handleNextButton()}}/>
        </ButtonWrapper>
      </AppBodyStyled>
    </AppStyled>
  )
}

App.defaultProps = {
  getListOfPokemon: PropTypes.func,
  totalPokemon: PropTypes.number,
  handleNextButton: PropTypes.func,
  handlePrevButton: PropTypes.func,
  handleDetailProfile: PropTypes.func,
}

App.defaultValue = {
  getListOfPokemon: () => {},
  totalPokemon: null,
  handleNextButton: () => {},
  handlePrevButton: () => {},
  handleDetailProfile: () => {},
}

export default App
