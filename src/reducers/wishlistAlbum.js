import {
  SET_WISHLIST_ALBUM,
  CLEAR_WISHLIST_ALBUM,
  SET_MARK_FOR_DELETE
} from '../constants'
import { merge } from 'ramda'

const initialState = {
  title: '',
  artist: '',
  year: '',
  genre: '',
  photo: '',
  desc: '',
  markedForDeletion: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST_ALBUM:
      return merge(state, action.payload)
    case SET_MARK_FOR_DELETE:
      return merge(state, { markedForDeletion: true })
    case CLEAR_WISHLIST_ALBUM:
      return initialState
    default:
      return state
  }
}
