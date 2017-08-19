import {
  SET_WISHLIST_ALBUM,
  CLEAR_WISHLIST_ALBUM,
  SET_WISHLIST_ALBUM_X,
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
    case SET_WISHLIST_ALBUM_X + 'TITLE':
      return merge(state, { title: action.payload })
    case SET_WISHLIST_ALBUM_X + 'ARTIST':
      return merge(state, { artist: action.payload })
    case SET_WISHLIST_ALBUM_X + 'YEAR':
      return merge(state, { year: action.payload })
    case SET_WISHLIST_ALBUM_X + 'GENRE':
      return merge(state, { genre: action.payload })
    case SET_WISHLIST_ALBUM_X + 'PHOTO':
      return merge(state, { photo: action.payload })
    case SET_WISHLIST_ALBUM_X + 'DESC':
      return merge(state, { desc: action.payload })
    case SET_MARK_FOR_DELETE:
      return merge(state, { markedForDeletion: true })
    case CLEAR_WISHLIST_ALBUM:
      return initialState
    default:
      return state
  }
}
