import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import { createCrateAlbum } from '../db'
import {
  SET_ALBUM_TITLE,
  SET_ALBUM_ARTIST,
  SET_ALBUM_YEAR,
  SET_ALBUM_GENRE,
  SET_ALBUM_DESC,
  SET_ALBUM_PHOTO
} from '../constants'

const CreateAlbum = props => {
  return (
    <div className="flex flex-column justify-start w-100">
      <header className="h3 flex justify-between items-center bg-black-30">
        <div className="ml3">
          <Link className="link hover-white black-60" to="/pages/list-albums">
            <i className="db tc ion-close" />
          </Link>
        </div>
        <div className="f4">
          <img
            alt="Logo"
            className="h3 w3"
            src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
          />
        </div>
        <div className="mr3">
          <Link to="/pages/search-albums">
            <i className="db tc black-60 hover-white ion-search" />
          </Link>
        </div>
      </header>
      <main className="overflow-scroll">
        <h4>Add Album to Crate</h4>

        <form className="ph2" onSubmit={props.handleSubmit(props.history)}>
          <TextField
            label="Title"
            value={props.title}
            onChange={props.setTitle}
          />
          <TextField
            label="Artist"
            value={props.artist}
            onChange={props.setArtist}
          />
          <TextField label="Year" value={props.year} onChange={props.setYear} />
          <TextField
            label="Genre"
            value={props.genre}
            onChange={props.setGenre}
          />
          <TextField
            label="Description (optional)"
            value={props.desc}
            onChange={props.setDesc}
          />
          <TextField
            label="Photo (optional)"
            value={props.photo}
            onChange={props.setPhoto}
          />
          <div className="measure mt2">
            <div className="flex justify-center pv4">
              <img alt="" className="pa2 br2 mr2" src={props.photo} />
            </div>
          </div>

          <div>
            <Button className="w-100 bg-black white ba br2 tc">
              Save Album
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  return {
    title: state.album.title,
    artist: state.album.artist,
    year: state.album.year,
    genre: state.album.genre,
    desc: state.album.desc,
    photo: state.album.photo
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: history => e => {
      e.preventDefault()
      dispatch(createCrateAlbum(history))
    },
    setTitle: e => dispatch({ type: SET_ALBUM_TITLE, payload: e.target.value }),
    setArtist: e =>
      dispatch({ type: SET_ALBUM_ARTIST, payload: e.target.value }),
    setYear: e => dispatch({ type: SET_ALBUM_YEAR, payload: e.target.value }),
    setGenre: e => dispatch({ type: SET_ALBUM_GENRE, payload: e.target.value }),
    setDesc: e => dispatch({ type: SET_ALBUM_DESC, payload: e.target.value }),
    setPhoto: e => dispatch({ type: SET_ALBUM_PHOTO, payload: e.target.value })
  }
}

export default connector(CreateAlbum)
