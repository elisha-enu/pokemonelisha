import { connect } from 'react-redux';
import App from './units';
import { getListOfPokemon, handleNextButton, handlePrevButton } from '../../store/function'; 
// import axios from 'axios';
// import {
//   GET_LIST_PAGE,
// } from '../../store/actions';

const mapStateToProps = state => {
    return {
      listOfPokemon: state.list.results,
      totalPokemon: state.list.count,
      offset: state.offset,
      limit: state.limit,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    getListOfPokemon: (offset, limit) => dispatch(getListOfPokemon(offset, limit)),
    handleNextButton: () => dispatch(handleNextButton()),
    handlePrevButton: () => dispatch(handlePrevButton()),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(App);