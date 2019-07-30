// import {
//   GET_LIST_PAGE,
//   GET_DETAIL_PAGE,
//   GET_MYPOKEMON_LIST_PAGE,
// } from './actions'

const initialState = {
  list: {},
};

const reducer = (state= initialState, action) => {
  // [GET_LIST_PAGE]: (state, payload) => ({
  //   ...state,
  //   list: payload,
  // })
  console.log('action', action)
  switch(action.type) {
    case action.GET_LIST_PAGE:
      return {
        ...state,
        list: action.payload,
      }
    case action.GET_DETAIL_PAGE:
      return {

      }
    case action.GET_MYPOKEMON_LIST_PAGE:
      return {

      }
    default:
      return state;
  }
}

export default reducer
