
import {
    GET_LIST_PAGE_SUCCESS,
} from './actions'
import * as functions from './function'
import listPoke from '../__mock__/listpoke'

describe('testing function getListPokemonSuccess', () => {
  it('should return list of all pokemon', () => {
    const product = listPoke
    const expectedAction = {
      type: GET_LIST_PAGE_SUCCESS,
      payload: product
    }
    expect(functions.getListPokemonSuccess(product)).toEqual(expectedAction)
  })
})
