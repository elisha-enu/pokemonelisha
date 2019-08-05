import { connect } from 'react-redux';
import ListPokemon from './units';
import {
  handleDetailProfile,
  handleRemovePokemon,
} from '../../store/function'; 

export const mapStateToProps = state => {
    return {
      listMyPokemon: state.myPokemonList,
    }
  }
  
export const mapDispatchToProps = dispatch => ({
  handleDetailProfile: (url) => dispatch(handleDetailProfile(url)),
  handleRemovePokemon: (idx) => dispatch(handleRemovePokemon(idx)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPokemon);