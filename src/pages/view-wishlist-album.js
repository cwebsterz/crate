import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, Button } from 'jrs-react-components'
import {
  getWishlistAlbum,
  deleteWishlistAlbum,
  createAlbumFromWishlist
} from '../db'

class ViewWishlistAlbum extends React.Component {
  componentDidMount() {
    const wishlistAlbumId = this.props.match.params.wishlistAlbumId
    this.props.dispatch(getWishlistAlbum(wishlistAlbumId))
  }

  render() {
    const props = this.props
    const result = this.props.wishlistAlbum.markedForDeletion
      ? <section className="ph3 ph5-ns pv5 avenir">
          <article className="mw8 center br2 ba bg-black-30">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  <h2 className="fw4 black mt0 mb3">Success!</h2>
                  <p className="black measure lh-copy mv0">
                    Hooray, your album has been added to your Crate!
                  </p>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <Link
                  to="/pages/list-wishlist-albums"
                  onClick={props.handleClick(props.history)}
                  className="no-underline f6 tc db w-100 pv3 bg-animate white bg-black-60 hover-white br2"
                >
                  Okay
                </Link>
              </div>
            </div>
          </article>
        </section>
      : <div className="flex flex-column justify-between vh-100 w-100 avenir">
          <div>
            <header className="h3 flex justify-between items-center bg-black-30">
              <div className="ml3">
                <Link
                  className="link hover-white black-60"
                  to={`/pages/profiles/${this.props.currentUser
                    .profileId}/wishlist`}
                >
                  <i className="db tc ion-chevron-left" />
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

          <main className="vh-100">
            <div className="db center mw5 tc black">
              <img
                className="db ba b--black-10"
                alt="Album Cover"
                src={props.wishlistAlbum.photo}
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0">
                  {props.wishlistAlbum.title}
                </dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray">
                  {props.wishlistAlbum.artist}
                </dd>
                <dt className="clip">Year</dt>
                <dd className="ml0">
                  {props.wishlistAlbum.year}
                </dd>
                <dt className="clip">Genre</dt>
                <dd className="ml0 gray">
                  {props.wishlistAlbum.genre}
                </dd>
                <dt className="clip">Desc</dt>
                <dd className="ml0">
                  {props.wishlistAlbum.desc}
                </dd>
              </dl>
            </div>
            <div className="center w-90 flex flex-row justify-between items-center ">
              <Button
                onClick={props.handleClick(props.history)}
                className="w-50 bg-red ba br2 mr1"
              >
                Remove
              </Button>
              <Button
                onClick={props.handleMove(props.wishlistAlbum, props.history)}
                className="w-50 bg-black ba br2 ml1"
              >
                Add to Crate
              </Button>
            </div>
          </main>
        </div>
    return result
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
  return {
    wishlistAlbum: state.wishlistAlbum,
    currentUser: state.currentUser
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch,
    handleMove: (album, history) => e =>
      dispatch(createAlbumFromWishlist(album, history)),
    handleClick: history => e => {
      window.confirm('Are you sure?')
        ? dispatch(deleteWishlistAlbum(history))
        : console.log('Did no delete item.')
    }
  }
}

export default connector(ViewWishlistAlbum)
