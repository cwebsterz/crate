import React from 'react'
import { Link } from 'react-router-dom'
import { List, SimpleListItem, Button } from 'jrs-react-components'

const ViewWishlistAlbum = () => {
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
              className="db ba b--black-10"
              src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg"
            />
          </div>
        </article>
        <h4 className="tc">Blonde</h4>

        <List className="center w-90 ba br2 b--light-gray tc">
          <SimpleListItem className="h2 bg-light-gray">
            Frank Ocean
          </SimpleListItem>
          <SimpleListItem>2016</SimpleListItem>
          <SimpleListItem className="h2 bg-light-gray">
            R&B/Hip-Hop
          </SimpleListItem>
          <SimpleListItem>
            Four years after the landmark Channel Orange, a release from Frank
            Ocean finds him writing richly emotional songs for a quieter, more
            meditative space.
          </SimpleListItem>
        </List>
        <div className="center w-90 flex flex-row justify-between items-center ">
          <Button className="w-50 bg-red ba br2 mr1">Remove</Button>
          <Button className="w-50 bg-black ba br2 ml1">Add to Crate</Button>
        </div>
      </main>
    </div>
  )
}

export default ViewWishlistAlbum
