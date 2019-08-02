import {
  GET_LIST_PAGE_BEGIN,
  GET_LIST_PAGE_ERROR,
  GET_LIST_PAGE_SUCCESS,
  GET_MYPOKEMON_LIST_PAGE,
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
};

const reducer = (state= initialState, action) => {
  switch(action.type) {
    case GET_LIST_PAGE_BEGIN:
      return {
        ...state,
        isLoading: true,
        list: action.payload,
      }
    case GET_LIST_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload,
      }
    case GET_LIST_PAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        list: action.error,
      }
    case GET_MYPOKEMON_LIST_PAGE:
      return {
        ...state
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
        isLoading: false,
        isError: false,
      }
    case SET_CATCHED_POKEMON_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    case SET_CATCHED_POKEMON_RENAME:
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer
