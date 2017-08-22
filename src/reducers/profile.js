import { SET_PROFILE, CLEAR_PROFILE, SET_PROFILE_X } from '../constants'
import { merge } from 'ramda'

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  location: '',
  photo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload
    case SET_PROFILE_X + 'FIRSTNAME':
      return merge(state, { firstName: action.payload })
    case SET_PROFILE_X + 'LASTNAME':
      return merge(state, { lastName: action.payload })
    case SET_PROFILE_X + 'AGE':
      return merge(state, { age: action.payload })
    case SET_PROFILE_X + 'LOCATION':
      return merge(state, { location: action.payload })
    case SET_PROFILE_X + 'PHOTO':
      return merge(state, { photo: action.payload })
    case CLEAR_PROFILE:
      return initialState
    default:
      return state
  }
}
