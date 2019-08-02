import {
  GET_LIST_PAGE_SUCCESS,
  GET_LIST_PAGE_ERROR,
  GET_LIST_PAGE_BEGIN,
  SET_PAGE,
  GET_DETAIL_PROFILE_SUCCESS,
  SET_CATCHED_POKEMON_SUCCESS,
  SET_CATCHED_POKEMON_FAILED,
  SET_CATCHED_POKEMON_RENAME,
} from './actions'
import axios from 'axios';

export const onBegin = () => ({
  type: GET_LIST_PAGE_BEGIN,
})

export const onSuccess = products => {
  return ({
    type: GET_LIST_PAGE_SUCCESS,
    payload: products,
  })
}

export const onError = error => ({
  type: GET_LIST_PAGE_ERROR,
  payload: {error},
})

export function getListOfPokemon(offset, limit) {
  console.log('jalan', offset, limit)
  let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

  return (dispatch) => {
    return axios.get(URL).then((response) => {
      dispatch(onSuccess(response.data))
    })
  }
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

export const onDetailProfileSuccess = products => {
  console.log('products', products)
  return ({
    type: GET_DETAIL_PROFILE_SUCCESS,
    payload: products,
  })
}

export function handleDetailProfile (payload) {
  console.log('payload di function', payload)
  let URL = payload

  return (dispatch) => {
    return axios.get(URL).then((response) => {
      dispatch(onDetailProfileSuccess(response.data))
    })
  }
}

export const onSuccessCatchedPokemon = data => {
  console.log('datacatchedpokemon', data)
  return ({
    type: SET_CATCHED_POKEMON_SUCCESS,
    payload: data,
  })
  
}

export const onFailedCatchedPokemon = () => {
  console.log('failed')
  return ({
    type: SET_CATCHED_POKEMON_FAILED,
  })
  
}

export const onRenameCatchedPokemon = () => {
  return ({
    type: SET_CATCHED_POKEMON_RENAME,
  })
}

export const handleCatchPokemon = () => (dispatch, getState) => {
  const randNumber = Math.floor(Math.random() * Math.floor(100));
  console.log('randNumber', randNumber )

  if(randNumber >=0 && randNumber <= 49) { // failed catch the pokemon
    dispatch(onFailedCatchedPokemon())
  } else { // success catch the pokemon
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
  dispatch(onSuccessCatchedPokemon(newListPokemon))
}


export const handleRemovePokemon = (id) => (dispatch, getState) => {
  const removedPokemon = getState().myPokemonList
  removedPokemon.splice(id,1)

  dispatch(onSuccessCatchedPokemon(removedPokemon))
}