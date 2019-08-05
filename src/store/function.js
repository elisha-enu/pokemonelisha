import {
  GET_LIST_PAGE_SUCCESS,

  SET_LOADING,
  SET_ERROR,

  SET_PAGE,

  GET_DETAIL_PROFILE_SUCCESS,

  SET_CATCHED_POKEMON_SUCCESS,
  SET_CATCHED_POKEMON_FAILED,
  SET_CATCHED_POKEMON_RENAME,
} from './actions'
import axios from 'axios'

export const onLoading = () => ({
  type: SET_LOADING,
})

export const onError = () => ({
  type: SET_ERROR,
})

export const getListPokemonSuccess = products => ({
  type: GET_LIST_PAGE_SUCCESS,
  payload: products,
})

export const getListOfPokemon = (offset, limit) => (dispatch) => {
  let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

  dispatch(onLoading());
  
  return axios.get(URL).then((response) => {
    dispatch(getListPokemonSuccess(response.data))
  }).catch((error) => {
    dispatch(onError())
  });
}

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload
})

export const handleNextButton = () => (dispatch, getState) => {
  const offsets = getState().offset
  const limits = getState().limit
  const newOffsets = offsets + limits

  dispatch(setPage(newOffsets))
}

export const handlePrevButton = () => (dispatch, getState) => {
  const offsets = getState().offset
  const limits = getState().limit
  const newOffsets = offsets - limits

  dispatch(setPage(newOffsets))
}

export const getDetailProfileSuccess = products => {
  return ({
    type: GET_DETAIL_PROFILE_SUCCESS,
    payload: products,
  })
}

export const handleDetailProfile = (payload) => (dispatch) => {
  let URL = payload

  dispatch(onLoading());

  return axios.get(URL).then((response) => {
    dispatch(getDetailProfileSuccess(response.data))
  }).catch((error) => {
    console.log(error)
    dispatch(onError())
  })
}

export const setSuccessCatchedPokemon = data => {
  return ({
    type: SET_CATCHED_POKEMON_SUCCESS,
    payload: data,
  })
}

export const onFailedCatchedPokemon = () => {
  return ({
    type: SET_CATCHED_POKEMON_FAILED,
  })
}

export const onRenameCatchedPokemon = () => {
  return ({
    type: SET_CATCHED_POKEMON_RENAME,
  })
}

export const handleCatchPokemon = () => (dispatch) => {
  const randNumber = Math.floor(Math.random() * Math.floor(100));

  if(randNumber >=0 && randNumber <= 49) {
    dispatch(onFailedCatchedPokemon())
  } else {
    dispatch(onRenameCatchedPokemon())
  }
}

export const handleRenameNickname = (newNickname) => (dispatch, getState) => {
  const mypokemonId = getState().detailProfile.id
  const mypokemonName = getState().detailProfile.name
  const urlPoke = `https://pokeapi.co/api/v2/pokemon/${mypokemonId}`

  const listPokemon = getState().myPokemonList
  const data = {urlPokemon: urlPoke, nicknamePokemon: newNickname, name: mypokemonName}

  const newListPokemon = listPokemon.concat(data)

  dispatch(setSuccessCatchedPokemon(newListPokemon))
}


export const handleRemovePokemon = (id) => (dispatch, getState) => {
  const removedPokemon = getState().myPokemonList
  removedPokemon.splice(id,1)

  dispatch(setSuccessCatchedPokemon(removedPokemon))
}