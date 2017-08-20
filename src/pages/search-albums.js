import React from 'react'
import { List, TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import { searchInput } from '../db'
import { SEARCH_TEXT } from '../constants'
import { map } from 'ramda'

class SearchAlbums extends React.Component {
  render() {
    const props = this.props
    return (
      <div className="flex flex-column justify-start w-100">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <i className="db tc hover-white ion-close" />
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

          <form className="ph2" onSubmit={props.handleSubmit(props.criteria)}>
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
            {map(li, props.searchResults)}
          </List>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
  return {
    search: state.search,
    searchAlbum: state.search.searchAlbum,
    searchResults: state.search.searchResults
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: criteria => {
      console.log('criteria: ', criteria)
      dispatch(searchInput(criteria))
    },
    setSearchText: e => dispatch({ type: SEARCH_TEXT, payload: e.target.value })
  }
}

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

export default connector(SearchAlbums)
