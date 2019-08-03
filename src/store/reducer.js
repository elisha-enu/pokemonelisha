import {
  SET_LOADING,
  SET_ERROR,

  GET_LIST_PAGE_SUCCESS,

  SET_PAGE,

  GET_DETAIL_PROFILE_SUCCESS,

  SET_CATCHED_POKEMON_SUCCESS,
  SET_CATCHED_POKEMON_FAILED,
  SET_CATCHED_POKEMON_RENAME,
} from './actions'

const initialState = {
  list: {
    results: [],
    count: 0,
    next: '',
    prev: '',
  },
  isLoading: false,
  isError: false,
  offset: 0,
  limit: 20,
  detailProfile: {
    id: '',
    name: '',
    moves: [],
    types: [],
    sprites: {},
  },
  myPokemonList: [],
  failedCatch: false,
  succeedCatch: false,
};

const reducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case GET_LIST_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case SET_PAGE:
      return {
        ...state,
        offset: action.payload,
      }
    case GET_DETAIL_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailProfile: action.payload,
      }
    case SET_CATCHED_POKEMON_SUCCESS:
      return {
        ...state,
        myPokemonList: action.payload,
        failedCatch: false,
        succeedCatch: false,
      }
    case SET_CATCHED_POKEMON_FAILED:
      return {
        ...state,
        failedCatch: true,
        succeedCatch: false,
      }
    case SET_CATCHED_POKEMON_RENAME:
      return {
        ...state,
        failedCatch: false,
        succeedCatch: true,
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer
