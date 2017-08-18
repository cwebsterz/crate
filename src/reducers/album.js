import {
  SET_ALBUM,
  CLEAR_ALBUM,
  SET_ALBUM_TITLE,
  SET_ALBUM_YEAR,
  SET_ALBUM_ARTIST,
  SET_ALBUM_GENRE,
  SET_ALBUM_PHOTO,
  SET_ALBUM_DESC
} from '../constants'
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
    case SET_ALBUM_TITLE:
      return merge(state, action.payload)
    case SET_ALBUM_ARTIST:
      return merge(state, action.payload)
    case SET_ALBUM_YEAR:
      return merge(state, action.payload)
    case SET_ALBUM_GENRE:
      return merge(state, action.payload)
    case SET_ALBUM_PHOTO:
      return merge(state, action.payload)
    case SET_ALBUM_DESC:
      return merge(state, action.payload)
    case CLEAR_ALBUM:
      return initialState
    default:
      return state
  }
}
