import {
  SEARCH_TEXT,
  SEARCH_RESULTS,
  CLEAR_SEARCHED_ALBUMS
} from '../constants'
import { merge } from 'ramda'

export default (state = { searchAlbum: '', searchResults: [] }, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return merge(state, { searchAlbum: action.payload })
    case SEARCH_RESULTS:
      return merge(state, { searchResults: action.payload })
    case CLEAR_SEARCHED_ALBUMS:
      return { searchAlbum: '', searchResults: [] }
    default:
      return state
  }
}
