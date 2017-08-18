import { SET_COLLECTION } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.payload
    // case SET_ALBUM:
    //   return action.payload
    // case DELETE_ALBUM:
    //   console.log('deleted album is: ', action.payload)
    //   return reject(album => (album.id = action.payload.id), state)
    default:
      return state
  }
}
