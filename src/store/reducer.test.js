import reducer from './reducer'
import expect from 'expect'
import * as actions from './actions'
import * as fun from './function'
import axios from 'axios'
import moxios from 'moxios'
import listPoke from '../__mock__/listpoke'
import detailPoke from '../__mock__/detailpoke'

describe('reducer test', () => {
    const initialState = {
        "detailProfile": {
            "id": "",
            "moves": [],
            "name": "",
            "sprites": {},
            "types": []
        },
        "failedCatch": false,
        "isError": false,
        "isLoading": false,
        "limit": 20,
        "list": {
            "count": 0,
            "next": "",
            "prev": "",
            "results": []
        },
        "myPokemonList": [],
        "offset": 0,
        "succeedCatch": false
    }
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    it('should return INITIAL STATE', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle SET_LOADING', () => {
        const setLoadingAction = {
            type: actions.SET_LOADING
        }
        const expectedState = {
            ...initialState,
            isError: false,
            isLoading: true
        }

        expect(reducer(initialState, setLoadingAction)).toEqual(expectedState)
    })

    it('should handle GET_LIST_PAGE_SUCCESS', () => {
        const expectedList = listPoke

        const expectedAction = {
            type: actions.GET_LIST_PAGE_SUCCESS,
            payload: expectedList
        }

        const expectedState = {
            ...initialState,
            isLoading: false,
            isError: false,
            list : expectedList
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle SET_ERROR', () => {
        const expectedAction = {
            type: actions.SET_ERROR,
        }

        const expectedState = {
            ...initialState,
            isLoading: false,
            isError: true,
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle SET_PAGE', () => {
        const expectedAction = {
            type: actions.SET_PAGE,
            payload: 20,
        }

        const expectedState = {
            ...initialState,
            offset: 20
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle GET_DETAIL_PROFILE_SUCCESS', () => {
        const detail = detailPoke

        const expectedAction = {
            type: actions.GET_DETAIL_PROFILE_SUCCESS,
            payload: detail,
        }

        const expectedState = {
            ...initialState,
            isLoading: false,
            isError: false,
            detailProfile: detail,
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle SET_CATCHED_POKEMON_SUCCESS', () => {
        const myPokemon = {
            urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
            nicknamePokemon: "venusaur elisha",
            name: "venusaur"
        }

        const expectedAction = {
            type: actions.SET_CATCHED_POKEMON_SUCCESS,
            payload: myPokemon,
        }

        const expectedState = {
            ...initialState,
            myPokemonList: myPokemon,
            isLoading: false,
            isError: false,
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle SET_CATCHED_POKEMON_FAILED', () => {
        const expectedAction = {
            type: actions.SET_CATCHED_POKEMON_FAILED,
        }

        const expectedState = {
            ...initialState,
            failedCatch: true,
            succeedCatch: false,
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })

    it('should handle SET_CATCHED_POKEMON_RENAME', () => {
        const expectedAction = {
            type: actions.SET_CATCHED_POKEMON_RENAME,
        }

        const expectedState = {
            ...initialState,
            failedCatch: false,
            succeedCatch: true,
        }

        expect(reducer(initialState, expectedAction)).toEqual(expectedState)
    })
});