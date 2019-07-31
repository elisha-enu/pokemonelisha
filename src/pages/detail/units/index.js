import React from 'react';
import './styled.js';
import Button from '../../../components/button';
// import { AppStyled, AppHeaderStyled, PokemonListStyled } from './styled.js';

const Detail = ({
  pokemonName,
  pokemonMoves,
  pokemonTypes,
  pokemonSprites,
}) => {
  // useEffect(() => { getListOfPokemon(offset, limit) }, [offset])
  return (
    <div>
      {pokemonName} <br/>
      <Button label="Catch me!" onClick={() => console.log('catch me!')}/>
      Moves:
      {
        pokemonMoves.map((mv, idx) => {
          return (
          <div key={`move-${idx}`}>
            {mv.move.name}
          </div>
        )})
      }
      <br/>
      Pokemon Types :
      {
        pokemonTypes.map((typ, idx) => {
          return (
            <div key={`type-${idx}`}>
              {typ.type.name}
            </div>
          )
        })
      }
      <br/>
      Pokemon Image: 
      {
        Object.keys(pokemonSprites).map((sp, idx) => {
          return (
            <div key={`type-${idx}`}>
            {
              pokemonSprites[sp] && (
                <>
                  {sp}
                  <img src={pokemonSprites[sp]} alt={sp}/>
                </>
              )
            }
            </div>
          )
        })
      }
    </div>
    // <AppStyled>
    //   <AppHeaderStyled>
    //     List of Pokemon :
    //     {
    //       listOfPokemon.map((list, idx) => (
    //         <PokemonListStyled key={idx} onClick={() => handleDetailProfile(list.url)}>
    //           {list.name}
    //         </PokemonListStyled>
    //       ))
    //     }
    //     Total Pokemon: {totalPokemon}
    //     <Button label="Prev" onClick={() => { offset - limit >=0 && handlePrevButton()} }/>
    //     <Button label="Next" onClick={() => { (offset+limit) < totalPokemon && handleNextButton()}}/>
    //   </AppHeaderStyled>
    // </AppStyled>
  )
}

Detail.defaultProps = {
  // getListOfPokemon: PropTypes.func,
  // totalPokemon: PropTypes.number,
  // handleNextButton: PropTypes.func,
  // handlePrevButton: PropTypes.func,
  // handleDetailProfile: PropTypes.func,
  
}

Detail.defaultValue = {
  // getListOfPokemon: () => {},
  // totalPokemon: null,
  // handleNextButton: () => {},
  // handlePrevButton: () => {},
  // handleDetailProfile: () => {},
}

export default Detail
