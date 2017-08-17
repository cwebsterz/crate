import React from 'react'
import { Link } from 'react-router-dom'
import { List, SimpleListItem, Button } from 'jrs-react-components'

const ViewProfile = () => {
  return (
    <div className="flex flex-column justify-between vh-100 w-100 avenir">
      <div>
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link className="link black-60 hover-white" to="#">
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
        <article className="db center mw5 tc black">
          <div className="tc mt2">
            <img
              alt="Placeholder"
              className="db ba b--black-10"
              src="https://placehold.it/300x300?text=profile photo"
            />
          </div>
        </article>
        <h4 className="tc">Cullen Webster</h4>

        <List className="center w-90 ba br2 b--light-gray tc">
          <SimpleListItem className="h2 bg-light-gray">
            Charleston, SC
          </SimpleListItem>
          <SimpleListItem>23</SimpleListItem>
        </List>
        <div className="center w-90">
          <Button className="w-100 bg-red ba br2 ">Edit</Button>
        </div>
      </main>
    </div>
  )
}

export default ViewProfile
