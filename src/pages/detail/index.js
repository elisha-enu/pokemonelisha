import { connect } from 'react-redux';
import Detail from './units';
import {
  handleCatchPokemon,
  // getListOfPokemon, handleNextButton, handlePrevButton, handleDetailProfile
} from '../../store/function'; 

const mapStateToProps = state => {
    return {
      pokemonId: state.detailProfile.id,
      pokemonName:  state.detailProfile.name,
      pokemonMoves: state.detailProfile.moves,
      pokemonTypes: state.detailProfile.types,
      pokemonSprites: state.detailProfile.sprites,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    handleCatchPokemon: () => dispatch(handleCatchPokemon()),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Detail);