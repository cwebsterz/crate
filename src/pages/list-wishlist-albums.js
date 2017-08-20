import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { listWishlistAlbums } from '../db'

class ListWishlistAlbums extends React.Component {
  componentDidMount() {
    this.props.dispatch(listWishlistAlbums)
  }

  render() {
    return (
      <div className="pa2 avenir tc">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link className="link" to="/pages/view-profile">
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
            <Link className="link" to="/pages/wishlist/new-album">
              <i className="db tc black-60 hover-white ion-plus-circled" />
            </Link>
          </div>
        </header>
        <main>
          <h4>My Wishlist</h4>

          <article>
            <div className="cf avenir pa2">
              <div className="fl w-50 w-25-m w-20-l pa2">
                {map(li, this.props.wishlist)}
              </div>
            </div>
          </article>
        </main>
        <footer className="h3 flex flex-row justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link black-60 hover-white"
              to="/pages/crate/albums"
            >
              <i className="db tc black-60 hover-white ion-disc" />
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
            <Link className="link black-60 hover-white" to="/pages/local-map">
              <i className="db tc black-60 hover-white ion-ios-location" />
            </Link>
          </div>
        </footer>
      </div>
    )
  }
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist
  }
}

export default connector(ListWishlistAlbums)

function li(albums) {
  return (
    <a
      href={`/pages/view-wishlist-album/${albums._id}`}
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
