import { createStore, combineReducers, applyMiddleware } from 'redux'
import crate from './reducers/crate'
import wishlist from './reducers/wishlist'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ crate, wishlist }),
  applyMiddleware(thunk)
)

export default store
