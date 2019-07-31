import { connect } from 'react-redux';
import Detail from './units';
import {
  // getListOfPokemon, handleNextButton, handlePrevButton, handleDetailProfile
} from '../../store/function'; 

const mapStateToProps = state => {
  console.log('state', state)
    return {
      pokemonName:  state.detailProfile.name,
      pokemonMoves: state.detailProfile.moves,
      pokemonTypes: state.detailProfile.types,
      pokemonSprites: state.detailProfile.sprites,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    // getListOfPokemon: (offset, limit) => dispatch(getListOfPokemon(offset, limit)),
    // handleNextButton: () => dispatch(handleNextButton()),
    // handlePrevButton: () => dispatch(handlePrevButton()),
    // handleDetailProfile: (url) => dispatch(handleDetailProfile(url)),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Detail);