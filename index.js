import React from 'react'
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
import Map from './pages/local-map'
import AboutPage from './pages/about'
import HomePage from './pages/home'

const App = () => {
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
          <Route path="/pages/local-map" component={Map} />
          <Route path="/:page" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
