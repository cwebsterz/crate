import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'jrs-react-components'
import { getAlbum, deleteAlbum } from '../db'

class ViewAlbum extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.albumId
    this.props.dispatch(getAlbum(albumId))
  }

  render() {
    const props = this.props
    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir">
        <div>
          <header className="h3 flex justify-between items-center bg-black-30">
            <div className="ml3">
              <Link
                className="link black-60 hover-white"
                to={`/pages/profiles/${this.props.currentUser.profileId}/crate`}
              >
                <i className="db tc black-60 hover-white ion-chevron-left" />
              </Link>
            </div>
            <div className="f4">
              <img
                alt="Logo"
                className="h3 w3"
                src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
              />
            </div>
            <div className="mr3" />
          </header>
        </div>
        <main className="vh-100 pa4">
          <div className="db center mw5 tc black">
            <img
              className="db ba b--black-10"
              alt="Album Cover"
              src={props.album.photo}
            />
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="ml0">
                {props.album.title}
              </dd>
              <dt className="clip">Artist</dt>
              <dd className="ml0 gray">
                {props.album.artist}
              </dd>
              <dt className="clip">Year</dt>
              <dd className="ml0">
                {props.album.year}
              </dd>
              <dt className="clip">Genre</dt>
              <dd className="ml0 gray">
                {props.album.genre}
              </dd>
              <dt className="clip">Desc</dt>
              <dd className="ml0">
                {props.album.desc}
              </dd>
            </dl>
          </div>

          <div className="center w-90">
            <Button
              onClick={props.handleClick(props.history)}
              className="w-100 bg-red ba br2 "
            >
              Remove
            </Button>
          </div>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  return {
    album: state.album,
    currentUser: state.currentUser
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch: dispatch,
    handleClick: history => e => {
      window.confirm('Are you sure?')
        ? dispatch(deleteAlbum(history))
        : console.log('Did no delete item.')
    }
  }
}

export default connector(ViewAlbum)
