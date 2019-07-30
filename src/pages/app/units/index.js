import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './styled.css';
import Button from '../../../components/button';

const App = ({
  listOfPokemon,
  totalPokemon,
  getListOfPokemon,
  handleNextButton,
  handlePrevButton,
  offset,
  limit,
}) => {
  // const pokemonName = listOfPokemon.results
  // console.log(pokemonName['bulbasaur'].name)

  useEffect(() => { getListOfPokemon(offset, limit) }, [offset])

  return (
    <div className="App">
      <header className="App-header">
        List of Pokemon :
        {
          listOfPokemon.map((list, idx) => (
            <div key={idx}>
              {list.name}
            </div>
          ))
          // Object.keys(listOfPokemon).map((list, idx) => {
          //   console.log(listOfPokemon[list])
          // return (
          //   <div key={idx}>
          //     {listOfPokemon[list].name}
          //   </div>
          // )
          // })
        }
        Total Pokemon: {totalPokemon}
        <Button label="Prev" onClick={() => { offset - limit >=0 && handlePrevButton()} }/>
        <Button label="Next" onClick={() => { (offset+limit) < totalPokemon && handleNextButton()}}/>
      </header>
    </div>
  )
}

App.defaultProps = {
  getListOfPokemon: PropTypes.func,
  totalPokemon: PropTypes.number,
  handleNextButton: PropTypes.func,
  handlePrevButton: PropTypes.func,
}

App.defaultValue = {
  getListOfPokemon: () => {},
  totalPokemon: null,
  handleNextButton: () => {},
  handlePrevButton: () => {},
}

export default App
