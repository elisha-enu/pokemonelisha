
import * as actions from './actions'
import * as functions from './function'
import listPoke from '../__mock__/listpoke'
import detailPoke from '../__mock__/detailpoke'
import moxios from 'moxios'
import {
  mapDispatchToProps as mapDispatchToPropsApps,
  mapStateToProps as mapStateToPropsApps,
} from '../pages/app/index'
import {
  mapDispatchToProps as mapDispatchToPropsDetails,
} from '../pages/detail/index'
import {
  mapDispatchToProps as mapDispatchToPropsList,
} from '../pages/list/index'

import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('testing function', () => {
  
  beforeEach(() =>
    moxios.install()
  )
  afterEach(() =>
    moxios.uninstall()
  )

  it('should change loading state', () => {
    const expectedAction = {
      type: actions.SET_LOADING,
    }
    expect(functions.onLoading()).toEqual(expectedAction)
  })

  it('should change error state', () => {
    const expectedAction = {
      type: actions.SET_ERROR,
    }
    expect(functions.onError()).toEqual(expectedAction)
  })

  it('should return list of all pokemon', () => {
    const product = listPoke
    const expectedAction = {
      type: actions.GET_LIST_PAGE_SUCCESS,
      payload: product
    }
    expect(functions.getListPokemonSuccess(product)).toEqual(expectedAction)
  })

  it('should show default state for pokemon list', () => {
    expect(mapStateToPropsApps({
      list:{
        results: []
      }
    }).listOfPokemon).toEqual([])
  })

  it('should fetch list pokemon from API', async () => {
    // https://medium.com/@nantoaqui/testing-redux-connected-components-38e3be353456
    const dispatchSpy = sinon.spy()
    const expectedResult = {
      type: actions.GET_LIST_PAGE_SUCCESS,
      payload: listPoke,
    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: listPoke,
      })
    })

    // const {NAMA PROPS NYA}, masangin spy ke props itu
    const {getListOfPokemon} = mapDispatchToPropsApps(dispatchSpy)
    // panggil fungsi nya
    getListOfPokemon(0,20)

    // buat nyocokin fungsi yang dipanggil bener gak
    const expectedAction = functions.getListOfPokemon(0,20)

    // ngambil fungsi yang terakhir dipanggil itu apa tipenya
    const spyLastCall = dispatchSpy.args[0][0]
    
    // cek function yang di call bener sesuai gak sama yang dipanggil di line 76?
    expect(spyLastCall.types).toEqual(expectedAction.types)
    
    // di eksekusi axiosnya
    await spyLastCall(dispatchSpy)

    // kalo dispatch() pernah dipanggil dengan argumen hasil return dari getListPokemonSuccess berart berhasil
    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
    
    // buat ngeliat si dispatch ini di call pas apa aja, uncomment console.log nya
    // step 1 dari props dgn arg function getlistpokemonsuccess
    // step 2 pas loading dgn arg kosong
    // step 3 pas getlistpokemonsuccess dgn arg expectedResult(karena berhasil call dari axios --> kalo response moxios diganti 400/500 dia bakal fail unit testnya)
    // console.log(dispatchSpy.getCalls())
  })

  it('should set page (20 list of pokemon on 1 page)', () => {
    const expectedAction = {
      type: actions.SET_PAGE,
      payload: 20
    }
    expect(functions.setPage(20)).toEqual(expectedAction)
  })

  it('should handle next button', () => {
    const middlewares = [thunk] 
    const mockStore = configureStore(middlewares)

    const store = mockStore({
      offset: 0,
      limit: 20
    })

    const dispatchSpy = sinon.spy();
    const expectedResult = {
      type: actions.SET_PAGE,
      payload: 20,
    }

    const {handleNextButton} = mapDispatchToPropsApps(dispatchSpy);
    handleNextButton()

    const expectedAction = functions.handleNextButton();
    const spyLastCall = dispatchSpy.args[0][0];

    expect(spyLastCall.types).toEqual(expectedAction.types)

    spyLastCall(dispatchSpy, store.getState)

    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
  })

  it('should handle prev button', () => {
    const middlewares = [thunk] // add your middlewares like `redux-thunk`
    const mockStore = configureStore(middlewares)

    const store = mockStore({
      offset: 0,
      limit: 20
    })

    const dispatchSpy = sinon.spy();
    const expectedResult = {
      type: actions.SET_PAGE,
      payload: 20,
    }

    const {handleNextButton} = mapDispatchToPropsApps(dispatchSpy);
    handleNextButton()

    const expectedAction = functions.handleNextButton();
    const spyLastCall = dispatchSpy.args[0][0];

    expect(spyLastCall.types).toEqual(expectedAction.types)

    spyLastCall(dispatchSpy, store.getState)

    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
  })

  it('should return detail profile', () => {
    const expectedAction = {
      type: actions.GET_DETAIL_PROFILE_SUCCESS,
      payload: detailPoke
    }
    expect(functions.getDetailProfileSuccess(detailPoke)).toEqual(expectedAction)
  })

  it('should fetch detail profile from API', async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`
    const dispatchSpy = sinon.spy()
    const expectedResult = {
      type: actions.GET_DETAIL_PROFILE_SUCCESS,
      payload: url,
    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: url,
      })
    })

    // const {NAMA PROPS NYA}, masangin spy ke props itu
    const { handleDetailProfile } = mapDispatchToPropsApps(dispatchSpy)
    // panggil fungsi nya
    handleDetailProfile(url)

    // buat nyocokin fungsi yang dipanggil bener gak
    const expectedAction = functions.getListOfPokemon(0,20)

    // ngambil fungsi yang terakhir dipanggil itu apa tipenya
    const spyLastCall = dispatchSpy.args[0][0]
    
    // cek function yang di call bener sesuai gak sama yang dipanggil di line 76?
    expect(spyLastCall.types).toEqual(expectedAction.types)
    
    // di eksekusi axiosnya
    await spyLastCall(dispatchSpy)

    // kalo dispatch() pernah dipanggil dengan argumen hasil return dari getListPokemonSuccess berart berhasil
    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
  })

  it('should add new catched pokemon', () => {
    const myPokemon = {
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/4",
      nicknamePokemon: "charmender elisha",
      name: "charmander"
    }

    const expectedAction = {
      type: actions.SET_CATCHED_POKEMON_SUCCESS,
      payload: myPokemon
    }
    expect(functions.setSuccessCatchedPokemon(myPokemon)).toEqual(expectedAction)
  })

  it('should change state to catch pokemon failed', () => {
    const expectedAction = {
      type: actions.SET_CATCHED_POKEMON_FAILED,
    }
    expect(functions.onFailedCatchedPokemon()).toEqual(expectedAction)
  })

  it('should change state to catch pokemon rename', () => {
    const expectedAction = {
      type: actions.SET_CATCHED_POKEMON_RENAME,
    }
    expect(functions.onRenameCatchedPokemon()).toEqual(expectedAction)
  })

  it('should handle rename nickname', async () => {
    const myPokemon = [{
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur elisha",
      name: "venusaur"
    }]
    const myPokemonExpected = [{
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur elisha",
      name: "venusaur"
    },
    {
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur baru elisha",
      name: "venusaur"
    }]

    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)

    const store = mockStore({
      detailProfile : {
        id: 3,
        name: 'venusaur',
      },
      myPokemonList: myPokemon,
    })

    const dispatchSpy = sinon.spy();
    const expectedResult = {
      type: actions.SET_CATCHED_POKEMON_SUCCESS,
      payload: myPokemonExpected,
    }

    const {handleRenameNickname} = mapDispatchToPropsDetails(dispatchSpy);
    handleRenameNickname('venusaur baru elisha')

    const expectedAction = functions.handleCatchPokemon();
    const spyLastCall = dispatchSpy.args[0][0];

    expect(spyLastCall.types).toEqual(expectedAction.types)

    await spyLastCall(dispatchSpy, store.getState)

    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
  })

  it('should handle remove pokemon', () => {
    const middlewares = [thunk] 
    const mockStore = configureStore(middlewares)

    const myPokemon = [{
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur elisha",
      name: "venusaur"
    },
    {
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur baru elisha",
      name: "venusaur"
    }]

    const myPokemonExpected = [{
      urlPokemon: "https://pokeapi.co/api/v2/pokemon/3",
      nicknamePokemon: "venusaur elisha",
      name: "venusaur"
    }]

    const store = mockStore({myPokemonList: myPokemon})

    const dispatchSpy = sinon.spy();
    const expectedResult = {
      type: actions.SET_CATCHED_POKEMON_SUCCESS,
      payload: myPokemonExpected
    }

    const {handleRemovePokemon} = mapDispatchToPropsList(dispatchSpy);
    handleRemovePokemon(1)

    const expectedAction = functions.handleRemovePokemon();
    const spyLastCall = dispatchSpy.args[0][0];

    expect(spyLastCall.types).toEqual(expectedAction.types)

    spyLastCall(dispatchSpy, store.getState)

    expect(dispatchSpy.calledWithExactly(expectedResult)).toBe(true)
  })
})
