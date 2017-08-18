import fetch from 'isomorphic-fetch'
import {
  SET_COLLECTION,
  SET_WISHLIST,
  SET_ALBUM,
  SET_WISHLIST_ALBUM,
  CLEAR_ALBUM,
  CLEAR_WISHLIST_ALBUM,
  SET_MARK_FOR_DELETE
} from './constants'
import { omit } from 'ramda'

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
  fetch(apiURL + `/crate/albums/${id}`, getState())
    .then(res => res.json())
    .then(album => dispatch({ type: SET_ALBUM, payload: album }))
}

export const getWishlistAlbum = id => (dispatch, getState) => {
  fetch(apiURL + `/wishlist/albums/${id}`, getState())
    .then(res => res.json())
    .then(album => dispatch({ type: SET_WISHLIST_ALBUM, payload: album }))
}

export const deleteAlbum = history => (dispatch, getState) => {
  const album = getState().album
  fetch(apiURL + `/crate/albums/` + album._id, { method: 'DELETE' })
    .then(res => res.json())
    .then(dispatch({ type: CLEAR_ALBUM }))
    .then(() => history.push('/pages/list-albums'))
}

export const deleteWishlistAlbum = history => (dispatch, getState) => {
  const wishlistAlbum = getState().wishlistAlbum
  fetch(apiURL + `/wishlist/albums/` + wishlistAlbum._id, { method: 'DELETE' })
    .then(res => res.json())
    .then(dispatch({ type: CLEAR_WISHLIST_ALBUM }))
    .then(() => history.push('/pages/list-wishlist-albums'))
}

export const createAlbumFromWishlist = (album, history) => (
  dispatch,
  getState
) => {
  console.log('thunk album: ', album)
  album = omit(['_id', '_rev'], album)
  fetch(apiURL + `/crate/albums`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  })
    .then(res => res.json())
    .then(dispatch({ type: SET_MARK_FOR_DELETE }))
}
