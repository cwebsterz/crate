import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, Button } from 'jrs-react-components'

const HomePage = () => {
  return (
    <div className="flex flex-column justify-between vh-100 w-100 avenir">
      <div>
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link hover-white black-60"
              to="pages/create-profile"
            >
              Register
            </Link>
          </div>
          <div className="f4" />
          <div className="mr3">
            <Link className="link hover-white black-60" to="#">
              Log In
            </Link>
          </div>
        </header>
      </div>
      <main className="vh-100 bg-black-30">
        <article className="db center mw5 tc grow">
          <div className="tc mt2">
            <img
              className="db"
              src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
            />
          </div>
        </article>
        <h4 className="tc">crate</h4>

        <div className="pa3">
          "You cant always have your vinyl collection with you, but having a way
          to access it anywhere, anytime is a must for any vinyl enthusiast. If
          youre shopping for your collection, you'll need to know what you
          already have and what you're looking for."
        </div>
      </main>
    </div>
  )
}

export default HomePage
