import fetch from 'isomorphic-fetch'
import { SET_COLLECTION } from './constants'

const apiURL = 'http://localhost:5000'

export const listAlbums = (dispatch, getState) => {
  fetch(apiURL + '/crate/albums', getState())
    .then(res => res.json())
    .then(collection => dispatch({ type: SET_COLLECTION, payload: collection }))
}
