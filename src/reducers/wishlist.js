import { SET_WISHLIST, SET_WISHLIST_ALBUM } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_WISHLIST:
      return action.payload
    case SET_WISHLIST_ALBUM:
      return action.payload
    default:
      return state
  }
}
