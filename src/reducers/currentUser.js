import { SET_CURRENT_USER } from '../constants'

const initialState = {
  profileId: 'profile_sarahwebster_a26154ef-d06a-4a3e-8697-cde5f0f56543'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload
    default:
      return state
  }
}
