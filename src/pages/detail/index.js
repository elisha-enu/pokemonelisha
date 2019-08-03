import { connect } from 'react-redux';
import Detail from './units';
import {
  handleCatchPokemon,
  handleRenameNickname,
} from '../../store/function'; 

const mapStateToProps = state => {
    return {
      pokemonId: state.detailProfile.id,
      pokemonName:  state.detailProfile.name,
      pokemonMoves: state.detailProfile.moves,
      pokemonTypes: state.detailProfile.types,
      pokemonSprites: state.detailProfile.sprites,
      failedCatch: state.failedCatch,
      succeedCatch: state.succeedCatch,
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    handleCatchPokemon: () => dispatch(handleCatchPokemon()),
    handleRenameNickname: (nickname) => dispatch(handleRenameNickname(nickname)), 
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Detail);