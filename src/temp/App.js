import React from 'react';
import { connect } from 'react-redux';
import './App.css';
// import * as actionTypes from './store/actions';

const App = ({
  listOfPokemon,
}) => {
  console.log('listOfPokemon', listOfPokemon)
  return (
    <div className="App">
      <header className="App-header">
        List of Pokemon :
      </header>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    listOfPokemon: state.list,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
     
//   }
// }


export default connect(mapStateToProps, null)(App) ;
