import fetch from 'isomorphic-fetch'
import { SET_COLLECTION, SET_WISHLIST, SET_ALBUM } from './constants'

const apiURL = 'http://localhost:5000'

export const listAlbums = (dispatch, getState) => {
  fetch(apiURL + '/crate/albums', getState())
    .then(res => res.json())
    .then(collection => dispatch({ type: SET_COLLECTION, payload: collection }))
}

export const listWishlistAlbums = (dispatch, getState) => {
  fetch(apiURL + '/wishlist/albums', getState())
    .then(res => res.json())
    .then(wishlist => dispatch({ type: SET_WISHLIST, payload: wishlist }))
}

export const getAlbum = id => (dispatch, getState) => {
  fetch(apiURL + `/crate/${id}`, getState())
    .then(res => res.json())
    .then(album => dispatch({ type: SET_ALBUM, payload: album }))
}
