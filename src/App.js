import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pages/about" component={AboutPage} />
            <Route path="/pages/search-albums" component={SearchAlbums} />
            <Route path="/pages/list-albums" component={ListAlbums} />
            <Route
              path="/pages/list-wishlist-albums"
              component={ListWishlistAlbums}
            />
            <Route path="/pages/create-album" component={CreateAlbum} />
            <Route
              path="/pages/create-wishlist-album"
              component={CreateWishlistAlbum}
            />
            <Route path="/pages/create-profile" component={CreateProfile} />
            <Route path="/pages/view-album" component={ViewAlbum} />
            <Route
              path="/pages/view-wishlist-album"
              component={ViewWishlistAlbum}
            />
            <Route path="/pages/view-profile" component={ViewProfile} />
            <Route path="/pages/search-albums" component={SearchAlbums} />
            <Route path="/pages/map" component={MapPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
