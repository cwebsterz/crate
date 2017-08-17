import React from 'react'

import { List, ImageListItem, TextField, Button } from 'jrs-react-components'

const SearchAlbums = () => {
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
        <form className="ph2">
          <TextField value="Coloring Book" />
          <div className="">
            <Button className="w-100 bg-black ba br2">Search</Button>
          </div>
        </form>
        <List>
          <ImageListItem>
            <main className="mw6 center">
              <article className="dt w-100 bb b--black-05 pb2 mt2">
                <div className="dtc w2 w3-ns v-mid">
                  <img
                    alt="Album cover"
                    src="http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png"
                    className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
                  />
                </div>
                <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">
                    Coloring Book
                  </h1>
                  <h2 className="f6 fw4 mt0 mb0 black-60">Chance the Rapper</h2>
                </div>
                <div className="dtc v-mid">
                  <form className="w-100 tr">
                    <button
                      className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                      type="submit"
                    >
                      + Crate
                    </button>
                  </form>
                </div>
              </article>
            </main>
          </ImageListItem>
        </List>
      </main>
    </div>
  )
}

export default SearchAlbums
