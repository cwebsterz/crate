import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from 'jrs-react-components'

const CreateAlbum = () => {
  return (
    <div className="flex flex-column justify-start w-100">
      <header className="h3 flex justify-between items-center bg-black-30">
        <div className="ml3">
          <Link className="link hover-white black-60" to="#">
            <i className="db tc ion-close" />
          </Link>
        </div>
        <div className="f4">
          <img
            className="h3 w3"
            src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
          />
        </div>
        <div className="mr3">
          <Link to="/pages/search-albums">
            <i className="db tc black-60 hover-white ion-search" />
          </Link>
        </div>
      </header>
      <main className="overflow-scroll">
        <h4>Add Album</h4>
        <form className="ph2">
          <TextField name="Title" value="Narrow Stairs" />
          <TextField name="Artist" value="Death Cab for Cutie" />
          <TextField name="Year" value="2008" />
          <TextField name="Genre" value="Alternative" />
          <TextField
            name="Description (optional)"
            value="This album is good."
          />

          <div className="measure mt2">
            <label className="f6 b db mb2">Photo (optional)</label>
            <div className="flex justify-center pv4">
              <img
                className="ba pa2 br2 mr2"
                src="https://placehold.it/64x64?text='photo'"
              />
              <div className="pv3 ml2">
                <Button className="bg-black white ba br2 black">Upload</Button>
              </div>
            </div>
          </div>

          <div className="">
            <Button className="w-100 bg-black white ba br2">Save Album</Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateAlbum
