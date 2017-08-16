import React from 'react'
import { Link } from 'react-router-dom'
const ListAlbums = () => {
  return (
    <div className="pa2 avenir tc">
      <header className="h3 flex justify-between items-center bg-black-30">
        <div className="ml3">
          <Link className="link hover-white black-60" to="/pages/view-profile">
            <i className="db tc black-60 hover-white ion-person" />
          </Link>
        </div>
        <div className="f4">
          <img
            className="h3 w3"
            src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
          />
        </div>
        <div className="mr3">
          <Link className="link hover-white black-60" to="/pages/create-album">
            <i className="db tc black-60 hover-white ion-plus-circled" />
          </Link>
        </div>
      </header>
      <main>
        <h4>My Crate</h4>
        <article>
          <div className="cf avenir pa2">
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a className="db grow tc">
                <img
                  src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png"
                  alt="Frank Ocean Blonde Album Cover"
                  class="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Blonde</dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray truncate w-100">Frank Ocean</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a className="db grow tc">
                <img
                  src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png"
                  alt="Young Thug - Jeffery Album Cover"
                  class="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100 ttu">Jeffery</dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray truncate w-100">Young Thug</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a className="db grow tc">
                <img
                  src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png"
                  alt="Kendrick Lamar untitled unmastered. Album Cover"
                  class="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">
                    untitled umastered.
                  </dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray truncate w-100">Kendrick Lamar</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a className="db grow tc">
                <img
                  src="http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png"
                  alt="Kaytranada 99%"
                  class="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">99%</dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray truncate w-100">Kaytranada</dd>
                </dl>
              </a>
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
          <Link className="link black-60 hover-white" to="/pages/search-albums">
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

export default ListAlbums
