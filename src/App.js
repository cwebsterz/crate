import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CreateAlbum from './pages/create-album'
import ViewAlbum from './pages/view-album'
import ListAlbums from './pages/list-albums'

import CreateWishlistAlbum from './pages/create-wishlist-album'
import ListWishlistAlbums from './pages/list-wishlist-albums'
import ViewWishlistAlbum from './pages/view-wishlist-album'

import CreateProfile from './pages/create-profile'
import ViewProfile from './pages/view-profile'

import SearchAlbums from './pages/search-albums'
import MapPage from './pages/map'
import AboutPage from './pages/about'
import HomePage from './pages/home'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pages/about" component={AboutPage} />
          <Route
            path="/pages/profiles/:id/search-albums"
            component={SearchAlbums}
          />
          <Route
            path="/pages/profiles/:id/crate/:albumId"
            component={ViewAlbum}
          />
          <Route
            path="/pages/profiles/:id/wishlist/:wishlistAlbumId"
            component={ViewWishlistAlbum}
          />
          <Route
            path="/pages/profiles/:id/wishlist"
            component={ListWishlistAlbums}
          />
          <Route path="/pages/profiles/:id/crate" component={ListAlbums} />

          <Route path="/pages/crate/new-album" component={CreateAlbum} />
          <Route
            path="/pages/wishlist/new-album"
            component={CreateWishlistAlbum}
          />
          <Route path="/pages/create-profile" component={CreateProfile} />

          <Route path="/pages/profiles/:id" component={ViewProfile} />
          <Route path="/pages/local-map" component={MapPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
