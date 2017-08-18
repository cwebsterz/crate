import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { listAlbums } from '../db'

class ListAlbums extends React.Component {
  componentDidMount() {
    this.props.dispatch(listAlbums)
  }

  render() {
    return (
      <div className="pa2 avenir tc">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link hover-white black-60"
              to="/pages/view-profile"
            >
              <i className="db tc black-60 hover-white ion-person" />
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
            <Link
              className="link hover-white black-60"
              to="/pages/create-album"
            >
              <i className="db tc black-60 hover-white ion-plus-circled" />
            </Link>
          </div>
        </header>
        <main>
          <h4>My Crate</h4>

          <article>
            <div className="cf avenir pa2">
              <div className="fl w-50 w-25-m w-20-l pa2">
                {map(li, this.props.crate)}
              </div>
            </div>
          </article>
        </main>
        <footer className="h3 flex flex-row justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link black-60 hover-white"
              to="/pages/list-wishlist-albums"
            >
              <i className="db tc black-60 hover-white ion-ios-paper" />
            </Link>
          </div>

          <div>
            <Link
              className="link black-60 hover-white"
              to="/pages/search-albums"
            >
              <i className="db tc black-60 hover-white ion-search" />
            </Link>
          </div>

          <div className="mr3">
            <Link className="link hover-white black-60" to="pages/about">
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
    crate: state.crate
  }
}

export default connector(ListAlbums)

function li(albums) {
  return (
    <a
      href={`/pages/view-album/${albums._id}`}
      key={albums._id}
      className="db grow tc link"
    >
      <img alt="" src={albums.photo} className="w-100 db outline black-10" />
      <dl className="mt2 f6 lh-copy">
        <dt className="clip">Title</dt>
        <dd className="ml0 black truncate w-100">
          {albums.title}
        </dd>
        <dt className="clip">Artist</dt>
        <dd className="ml0 gray truncate w-100">
          {albums.artist}
        </dd>
      </dl>
    </a>
  )
}
