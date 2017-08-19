import { SET_ALBUM, CLEAR_ALBUM, SET_ALBUM_X } from '../constants'
import { merge } from 'ramda'

const initialState = {
  title: '',
  artist: '',
  year: '',
  genre: '',
  photo: '',
  desc: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.payload
    case SET_ALBUM_X + 'TITLE':
      return merge(state, { title: action.payload })
    case SET_ALBUM_X + 'ARTIST':
      return merge(state, { artist: action.payload })
    case SET_ALBUM_X + 'YEAR':
      return merge(state, { year: action.payload })
    case SET_ALBUM_X + 'GENRE':
      return merge(state, { genre: action.payload })
    case SET_ALBUM_X + 'PHOTO':
      return merge(state, { photo: action.payload })
    case SET_ALBUM_X + 'DESC':
      return merge(state, { desc: action.payload })
    case CLEAR_ALBUM:
      return initialState
    default:
      return state
  }
}
