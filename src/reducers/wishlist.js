import { SET_WISHLIST } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_WISHLIST:
      return action.payload
    default:
      return state
  }
}
