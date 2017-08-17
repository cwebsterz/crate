import { createStore, combineReducers, applyMiddleware } from 'redux'
import { SET_COLLECTION } from './constants'
import crate from './reducers/crate'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({ crate }), applyMiddleware(thunk))

function listAlbums(dispatch, getState) {
  const url = process.env.CRATE_API

  fetch(url + '/crate/albums').then(res => res.json()).then(crate => {
    dispatch({ type: SET_COLLECTION, payload: crate })
  })
}

store.dispatch(listAlbums)

export default store
