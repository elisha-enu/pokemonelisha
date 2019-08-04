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
  listMyPokemon,
}) => {
  useEffect(() => { getListOfPokemon(offset, limit) }, [offset])

  const ownedPokemon = [];
  listMyPokemon && listMyPokemon.map((list, idx) => {
    if (list.name in ownedPokemon)
      ownedPokemon[list.name] += 1;
    else
      ownedPokemon[list.name] = 1;
  })

  return (
    <AppStyled>
      <AppHeaderStyled>
        List of Pokemon
      </AppHeaderStyled>
      <AppBodyStyled>
        {
          listOfPokemon && listOfPokemon.map((list, idx) => (
            <PokemonListStyled key={idx} onClick={() => handleDetailProfile(list.url)}>
              <Link to='/detail'>
                <div>
                  {list.name}
                </div>
                <div>
                  {ownedPokemon[list.name] && `owned : ${ownedPokemon[list.name]}`}
                </div>
              </Link>
            </PokemonListStyled>
          ))
        }
        Total Pokemon: {totalPokemon}
        <ButtonWrapper>
          <Button label="Prev" name="prevButton" onClick={() => { offset - limit >=0 && handlePrevButton()} }/>
          <Button label="Next" name="nextButton" onClick={() => { offset + limit < totalPokemon && handleNextButton()}}/>
        </ButtonWrapper>
      </AppBodyStyled>
    </AppStyled>
  )
}

App.propTypes = {
  getListOfPokemon: PropTypes.func.isRequired,
  totalPokemon: PropTypes.number.isRequired,
  handleNextButton: PropTypes.func.isRequired,
  handlePrevButton: PropTypes.func.isRequired,
  handleDetailProfile: PropTypes.func.isRequired,
}

App.defaultProps = {
  getListOfPokemon: () => {},
  totalPokemon: 0,
  handleNextButton: () => {},
  handlePrevButton: () => {},
  handleDetailProfile: () => {},
}

export default App
