import { SET_COLLECTION, SET_ALBUM } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.payload
    case SET_ALBUM:
      return action.payload
    default:
      return state
  }
}
