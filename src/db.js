import fetch from 'isomorphic-fetch'
import {
  SET_COLLECTION,
  SET_WISHLIST,
  SET_ALBUM,
  SET_WISHLIST_ALBUM,
  CLEAR_ALBUM,
  CLEAR_WISHLIST_ALBUM,
  SEARCH_RESULTS,
  SET_PROFILE
} from './constants'
import { omit, append, assoc, filter } from 'ramda'

const apiURL = 'http://localhost:5000'

export const listAlbums = id => (dispatch, getState) => {
  fetch(apiURL + `/profiles/${id}/crate`, getState())
    .then(res => res.json())
    .then(crate => dispatch({ type: SET_COLLECTION, payload: crate }))
}

export const listWishlistAlbums = id => (dispatch, getState) => {
  fetch(apiURL + `/profiles/${id}/wishlist`)
    .then(res => res.json())
    .then(wishlist => dispatch({ type: SET_WISHLIST, payload: wishlist }))
}

export const getAlbum = albumId => (dispatch, getState) => {
  const id = getState().currentUser.profileId
  fetch(apiURL + `/profiles/${id}/crate/${albumId}`, getState())
    .then(res => res.json())
    .then(album => dispatch({ type: SET_ALBUM, payload: album }))
}

export const getWishlistAlbum = wishlistAlbumId => (dispatch, getState) => {
  const id = getState().currentUser.profileId
  fetch(apiURL + `/profiles/${id}/wishlist/${wishlistAlbumId}`, getState())
    .then(res => res.json())
    .then(album => dispatch({ type: SET_WISHLIST_ALBUM, payload: album }))
}

export const deleteAlbum = history => (dispatch, getState) => {
  const id = getState().currentUser.profileId
  const album = getState().album
  fetch(apiURL + `/crate/albums/` + album._id, { method: 'DELETE' })
    .then(res => res.json())
    .then(() => {
      history.push(`/pages/profiles/${id}/crate`)
    })
    .then(dispatch({ type: CLEAR_ALBUM }))
}

export const deleteWishlistAlbum = history => (dispatch, getState) => {
  const id = getState().currentUser.profileId
  const wishlistAlbum = getState().wishlistAlbum
  fetch(apiURL + `/wishlist/albums/` + wishlistAlbum._id, { method: 'DELETE' })
    .then(res => res.json())
    .then(() => {
      history.push(`/pages/profiles/${id}/wishlist`)
    })
    .then(dispatch({ type: CLEAR_WISHLIST_ALBUM }))
}

export const createAlbumFromWishlist = (album, history) => (
  dispatch,
  getState
) => {
  const id = getState().currentUser.profileId
  console.log('thunk album: ', album)
  album = omit(['_id', '_rev'], album)
  fetch(apiURL + `/profiles/${id}`)
    .then(res => res.json())
    .then(profile => append(album, profile.crate))
    .then(profile => console.log(profile))
  //.then(fetch())

  //.then(dispatch({ type: SET_MARK_FOR_DELETE }))
}

export const createCrateAlbum = (crateAlbum, history) => (
  dispatch,
  getState
) => {
  const id = getState().currentUser.profileId
  crateAlbum = assoc('profileId', id, crateAlbum)
  fetch(apiURL + `/profiles/${id}/crate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(crateAlbum)
  })
    .then(res => res.json())
    .then(() => {
      history.push(`/pages/profiles/${id}/crate`)
    })
    .then(data =>
      dispatch({
        type: SET_ALBUM,
        payload: {
          title: '',
          artist: '',
          year: '',
          genre: '',
          photo: '',
          desc: ''
        }
      })
    )
    .catch(err => console.log(err))
}

export const createWishlistAlbum = (wishlistAlbum, history) => (
  dispatch,
  getState
) => {
  const id = getState().currentUser.profileId
  wishlistAlbum = assoc('profileId', id, wishlistAlbum)
  fetch(apiURL + `/profiles/${id}/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(wishlistAlbum)
  })
    .then(res => res.json())
    .then(() => {
      history.push(`/pages/profiles/${id}/wishlist`)
    })
    .then(data =>
      dispatch({
        type: SET_WISHLIST_ALBUM,
        payload: {
          title: '',
          artist: '',
          year: '',
          genre: '',
          photo: '',
          desc: ''
        }
      })
    )
    .catch(err => console.log(err))
}

export const searchInput = searchAlbum => dispatch => {
  console.log('searchAlbum: ', searchAlbum)
  fetch(apiURL + `/search/${searchAlbum}`).then(res => res.json()).then(data =>
    dispatch({
      type: SEARCH_RESULTS,
      payload: filter(r => r.type === 'master', data.results)
    })
  )
}

export const createProfile = (profile, history) => (dispatch, getState) => {
  console.log('thunk profile: ', profile)
  fetch(apiURL + '/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE,
        payload: {
          firstName: '',
          lastName: '',
          age: '',
          location: '',
          photo: ''
        }
      })
    )
}
