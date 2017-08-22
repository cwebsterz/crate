import fetch from 'isomorphic-fetch'
import {
  SET_COLLECTION,
  SET_WISHLIST,
  SET_ALBUM,
  SET_WISHLIST_ALBUM,
  CLEAR_ALBUM,
  CLEAR_WISHLIST_ALBUM,
  SEARCH_RESULTS,
  SET_PROFILE,
  SET_MARK_FOR_DELETE
} from './constants'
import { omit, assoc, filter, head, last, split, trim, compose } from 'ramda'

const apiURL = 'http://localhost:5000'

export const listAlbums = id => (dispatch, getState) => {
  fetch(apiURL + `/profiles/${id}/crate`, getState())
    .then(res => res.json())
    .then(crate => dispatch({ type: SET_COLLECTION, payload: crate }))
}

export const showProfile = id => (dispatch, getState) => {
  const id = getState().currentUser.profileId
  fetch(apiURL + `/profiles/${id}`)
    .then(res => res.json())
    .then(profile => dispatch({ type: SET_PROFILE, payload: profile }))
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
  console.log('thunk album: ', album)
  const id = getState().currentUser.profileId
  album = omit(['_id', '_rev'], album)
  fetch(apiURL + `/profiles/${id}/crate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  })
    .then(res => res.json())
    .then(dispatch({ type: SET_MARK_FOR_DELETE }))
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

export const createWishlistAlbumFromSearch = (wishlistAlbum, history) => (
  dispatch,
  getState
) => {
  const id = getState().currentUser.profileId
  console.log('wishlistAlbumBefore: ', wishlistAlbum)
  wishlistAlbum = assoc('profileId', id, wishlistAlbum)

  const splitTitle = split('-', wishlistAlbum.title)
  const artist = compose(trim, head)(splitTitle)
  const title = compose(trim, last)(splitTitle)
  const genre = head(wishlistAlbum.genre)
  wishlistAlbum = assoc('genre', genre, wishlistAlbum)
  wishlistAlbum = assoc('photo', wishlistAlbum.thumb, wishlistAlbum)
  wishlistAlbum = assoc('title', title, wishlistAlbum)
  wishlistAlbum = assoc('artist', artist, wishlistAlbum)

  console.log('wishlistAlbumAfter: ', wishlistAlbum)

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

export const createCrateAlbumFromSearch = (crateAlbum, history) => (
  dispatch,
  getState
) => {
  const id = getState().currentUser.profileId
  console.log('crateAlbumBefore: ', crateAlbum)
  crateAlbum = assoc('profileId', id, crateAlbum)

  const splitTitle = split('-', crateAlbum.title)
  const artist = compose(trim, head)(splitTitle)
  const title = compose(trim, last)(splitTitle)
  const genre = head(crateAlbum.genre)
  crateAlbum = assoc('genre', genre, crateAlbum)
  crateAlbum = assoc('photo', crateAlbum.thumb, crateAlbum)
  crateAlbum = assoc('title', title, crateAlbum)
  crateAlbum = assoc('artist', artist, crateAlbum)

  console.log('crateAlbumAfter: ', crateAlbum)

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
