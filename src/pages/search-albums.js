import React from 'react'
import { List, TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import {
  searchInput,
  createWishlistAlbumFromSearch,
  createCrateAlbumFromSearch
} from '../db'
import { SEARCH_TEXT } from '../constants'
import { map } from 'ramda'
import { Link } from 'react-router-dom'

class SearchAlbums extends React.Component {
  render() {
    const props = this.props
    return (
      <div className="flex flex-column justify-start w-100">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser.profileId}/crate`}
            >
              <i className="db tc hover-white ion-close" />
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
        <main className="overflow-scroll">
          <h4 className="tc">Album Search</h4>

          <form
            className="ph2"
            onSubmit={props.handleSubmit(props.searchAlbum)}
          >
            <TextField
              value={props.searchAlbum}
              onChange={props.setSearchText}
              optional={false}
              label=""
            />

            <div>
              <Button className="w-100 bg-black ba br2">Search</Button>
            </div>
          </form>

          <List>
            {map(li(props), props.searchResults)}
          </List>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
  console.log('state.search.searchResults.results', state.search.searchResults)
  return {
    search: state.search,
    searchAlbum: state.search.searchAlbum,
    searchResults: state.search.searchResults,
    currentUser: state.currentUser
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch,
    handleWishlistClick: (wishlistAlbum, history) => e => {
      e.preventDefault()
      dispatch(createWishlistAlbumFromSearch(wishlistAlbum, history))
    },
    handleCrateClick: (crateAlbum, history) => e => {
      e.preventDefault()
      dispatch(createCrateAlbumFromSearch(crateAlbum, history))
    },
    handleSubmit: searchAlbum => e => {
      e.preventDefault()
      dispatch(searchInput(searchAlbum))
    },
    setSearchText: e => dispatch({ type: SEARCH_TEXT, payload: e.target.value })
  }
}

const li = props => album => {
  return (
    <article className="dt w-100 bb b--black-05 pb2 pa3 mt2" href="#0">
      <div className="dtc w3 w4-ns v-mid">
        <img
          alt={album.name}
          src={album.thumb}
          className="ba b--black-10 db br2 w3 w4-ns h3 h4-ns"
        />
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">
          {album.name}
        </h1>
      </div>
      <div className="dtc v-mid">
        <div>
          <button
            className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
            onClick={props.handleWishlistClick(album, props.history)}
          >
            + Wishlist
          </button>
        </div>
        <div>
          <button
            className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
            onClick={props.handleCrateClick(album, props.history)}
          >
            + Crate
          </button>
        </div>
      </div>
    </article>
  )
}

export default connector(SearchAlbums)
