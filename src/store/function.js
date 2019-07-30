import {
  GET_LIST_PAGE,
} from './actions'
import axios from 'axios';

export function getListOfPokemon() {
  let URL = `https://pokeapi.co/api/v2/pokemon/ditto`
  let promise = axios.get(URL)

  return {
    type: GET_LIST_PAGE,
    payload: promise,
  }
}