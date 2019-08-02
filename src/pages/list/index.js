import { connect } from 'react-redux';
import ListPokemon from './units';
import {
  handleDetailProfile,
  handleRemovePokemon,
} from '../../store/function'; 

const mapStateToProps = state => {
    return {
      listMyPokemon: state.myPokemonList,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    handleDetailProfile: (url) => dispatch(handleDetailProfile(url)),
    handleRemovePokemon: (idx) => dispatch(handleRemovePokemon(idx)),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ListPokemon);