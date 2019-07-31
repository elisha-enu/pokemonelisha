import {
  GET_LIST_PAGE_SUCCESS,
  GET_LIST_PAGE_ERROR,
  GET_LIST_PAGE_BEGIN,
  SET_PAGE,
  GET_DETAIL_PROFILE_SUCCESS,
  SET_CATCHED_POKEMON_SUCCESS,
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
      // dispatch(onBegin(response.data))
      dispatch(onSuccess(response.data))
      // dispatch(onError(response.error))
    })
  }

  // return function(dispatch) {
  //   dispatch({
  //     type: GET_LIST_PAGE_BEGIN,
  //   });
    
  // fetch(URL)
  //   .then(response => response.json())
  //   .then(data => dispatch({
  //       type: GET_LIST_PAGE_SUCCESS,
  //       payload: data
  //     }))
  //   .catch(error => dispatch({
  //       type: GET_LIST_PAGE_ERROR,
  //       payload: error
  //     })
  //   );
  // }


  // let request = axios.get(URL).then((dispatch) => {
  //   function onSuccess(success) {
  //     dispatch({ type: GET_LIST_PAGE_SUCCESS, payload: success });
  //     return success;
  //   }
  //   function onError(error) {
  //     dispatch({ type: GET_LIST_PAGE_ERROR, error });
  //     return error;
  //   }
  //   request.then(success => onSuccess, error => onError);
  // })

  // return request;

  // return dispatch => {
  //   dispatch(onBegin());
  //   return fetch(URL)
  //     .then(resp => resp.json())
  //     .then(json => {
  //       dispatch(onSuccess(json));
  //       return json;
  //     }).catch(error => dispatch(onError(error)))
  // }

  // return {
  //   type: GET_LIST_PAGE_SUCCESS,
  //   payload: axios.get(URL),
  // }
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
      // dispatch(onBegin(response.data))
      dispatch(onDetailProfileSuccess(response.data))
      // dispatch(onError(response.error))
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

export const handleCatchPokemon = () => (dispatch, getState) => {
  const randNumber = Math.floor(Math.random() * Math.floor(100));
  console.log('randNumber', randNumber )

  if(randNumber >=0 && randNumber <= 49) { // failed catch the pokemon
    return 0
  } else { // success catch the pokemon
    const mypokemonId = getState().detailProfile.id
    const data = {idPokemon: mypokemonId, nicknamePokemon: 'ana'}
    dispatch(onSuccessCatchedPokemon(data))
  }
}