import { SET_ALBUM, CLEAR_ALBUM } from '../constants'
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
    case CLEAR_ALBUM:
      return initialState
    default:
      return state
  }
}
