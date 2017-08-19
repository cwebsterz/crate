import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import { createCrateAlbum } from '../db'
import { SET_ALBUM_X } from '../constants'
import { toUpper } from 'ramda'

class CreateAlbum extends React.Component {
  render() {
    const props = this.props
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
            <TextField
              label="Year"
              value={props.year}
              onChange={props.setYear}
            />
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
              <Button className="w-100 bg-black white ba br2">
                Save Album
              </Button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
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
  const doDispatch = (field, value) => {
    dispatch({
      type: SET_ALBUM_X + toUpper(field),
      payload: value
    })
  }
  return {
    dispatch,
    handleSubmit: (album, history) => e => {
      dispatch(createCrateAlbum(album, history))
    },
    setTitle: e => doDispatch('TITLE', e.target.value),
    setArtist: e => doDispatch('ARTIST', e.target.value),
    setYear: e => doDispatch('YEAR', e.target.value),
    setGenre: e => doDispatch('GENRE', e.target.value),
    setDesc: e => doDispatch('DESC', e.target.value),
    setPhoto: e => doDispatch('PHOTO', e.target.value)
  }
}

export default connector(CreateAlbum)
