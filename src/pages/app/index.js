import { connect } from 'react-redux';
import App from './units';
import { 
  getListOfPokemon,
  handleNextButton,
  handlePrevButton,
  handleDetailProfile
} from '../../store/function'; 

export const mapStateToProps = state => {
  return {
    listOfPokemon: state.list.results,
    totalPokemon: state.list.count,
    offset: state.offset,
    limit: state.limit,
    listMyPokemon: state.myPokemonList,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  getListOfPokemon: (offset, limit) => dispatch(getListOfPokemon(offset, limit)),
  handleNextButton: () => dispatch(handleNextButton()),
  handlePrevButton: () => dispatch(handlePrevButton()),
  handleDetailProfile: (url) => dispatch(handleDetailProfile(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);