import {
  GET_LIST_PAGE_SUCCESS,
  GET_LIST_PAGE_ERROR,
  GET_LIST_PAGE_BEGIN,
  SET_PAGE,
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