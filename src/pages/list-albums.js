import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { listAlbums } from '../db'

class ListAlbums extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatch(listAlbums(id))
  }

  render() {
    const li = currentUser => album => {
      return (
        <article className="dt w-100 bb b--black-05 pb2 pa3 mt2 justify-between">
          <a
            href={`/pages/profiles/${currentUser.profileId}/crate/${album._id}`}
            className="db dim tc link"
          >
            <div className="dtc w3 w4-ns v-mid">
              <img
                alt={album.title}
                src={
                  album.photo
                    ? album.photo
                    : `https://placehold.it/200x200/000000/ffffff?text=${album.title}`
                }
                className="w-100 db outline black-10"
              />
            </div>
            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">
                {album.title}
              </h1>
            </div>
          </a>
        </article>
      )
    }

    return (
      <div className="pa2 avenir tc">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser.profileId}`}
            >
              <i className="db tc black-60 hover-white ion-person" />
            </Link>
          </div>
          <div className="f4">
            <Link className="link hover-white black-60" to="/">
              <img
                alt="Logo"
                className="h3 w3"
                src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
              />
            </Link>
          </div>
          <div className="mr3">
            <Link
              className="link hover-white black-60"
              to="/pages/crate/new-album"
            >
              <i className="db tc black-60 hover-white ion-plus-circled" />
            </Link>
          </div>
        </header>
        <main>
          <h4>My Crate</h4>

          <article>
            <div className="cf avenir pa2">
              {map(li(this.props.currentUser), this.props.crate)}
            </div>
          </article>
        </main>
        <footer className="h3 flex flex-row justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link black-60 hover-white"
              to={`/pages/profiles/${this.props.currentUser
                .profileId}/wishlist`}
            >
              <i className="db tc black-60 hover-white ion-ios-paper" />
            </Link>
          </div>

          <div>
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser
                .profileId}/search-albums`}
            >
              <i className="db tc black-60 hover-white ion-search" />
            </Link>
          </div>

          <div className="mr3">
            <Link className="link hover-white black-60" to="/pages/about">
              <i className="db tc black-60 hover-white ion-information-circled" />
            </Link>
          </div>
        </footer>
      </div>
    )
  }
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
  return {
    crate: state.crate,
    currentUser: state.currentUser
  }
}

export default connector(ListAlbums)
