import { createStore, combineReducers, applyMiddleware } from 'redux'
import crate from './reducers/crate'
import wishlist from './reducers/wishlist'
import album from './reducers/album'
import wishlistAlbum from './reducers/wishlistAlbum'
import search from './reducers/search'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ crate, wishlist, album, wishlistAlbum, search }),
  applyMiddleware(thunk)
)

export default store
