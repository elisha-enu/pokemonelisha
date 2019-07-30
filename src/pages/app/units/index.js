import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './styled.css';

const App = ({
  listOfPokemon,
  getListOfPokemon,
}) => {
  console.log('listOfPokemon',  listOfPokemon)
  useEffect(() => {
    getListOfPokemon()
  })

  return (
    <div className="App">
      <header className="App-header">
        List of Pokemon :
        {
          // listOfPokemon.map((list, idx) => (
          //   <div>
          //     {list}
          //   </div>
          // ))
        }
      </header>
    </div>
  )
}

App.defaultProps = {
  getListOfPokemon: PropTypes.func,
}

App.defaultValue = {
  getListOfPokemon: () => {},
}

export default App
