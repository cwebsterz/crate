import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, Button } from 'jrs-react-components'
import { getWishlistAlbum } from '../db'

class ViewWishlistAlbum extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id
    console.log('id: ', this.props.match.params.id)
    this.props.dispatch(getWishlistAlbum(albumId))
  }

  render() {
    const props = this.props
    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir">
        <div>
          <header className="h3 flex justify-between items-center bg-black-30">
            <div className="ml3">
              <Link
                className="link hover-white black-60"
                to="/pages/list-wishlist-albums"
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
          <article className="db center mw5 tc black grow">
            <div className="tc mt2">
              <img
                alt="Album cover"
                className="db ba b--black-10"
                src={props.wishlist.photo}
              />
            </div>
          </article>
          <h4 className="tc">
            {props.wishlist.title}
          </h4>

          <List className="center w-90 ba br2 b--light-gray tc">
            <li className="h2 bg-light-gray">
              {props.wishlist.artist}
            </li>
            <li>
              {props.wishlist.year}
            </li>
            <li className="h2 bg-light-gray">
              {props.wishlist.genre}
            </li>
            <li>
              {props.wishlist.desc}
            </li>
          </List>
          <div className="center w-90 flex flex-row justify-between items-center ">
            <Button className="w-50 bg-red ba br2 mr1">Remove</Button>
            <Button className="w-50 bg-black ba br2 ml1">Add to Crate</Button>
          </div>
        </main>
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

export default connector(ViewWishlistAlbum)
