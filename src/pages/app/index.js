import { connect } from 'react-redux';
import App from './units';
import { getListOfPokemon } from '../../store/function'; 
// import axios from 'axios';
// import {
//   GET_LIST_PAGE,
// } from '../../store/actions';

const mapStateToProps = state => {
    return {
      listOfPokemon: state.list,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    getListOfPokemon: () => dispatch(getListOfPokemon()),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(App) ;