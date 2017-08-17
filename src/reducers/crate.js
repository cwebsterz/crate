import { SET_COLLECTION } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.payload
    default:
      return state
  }
}
