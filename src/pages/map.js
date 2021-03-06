import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from 'jrs-react-components'
import { connect } from 'react-redux'

class MapPage extends React.Component {
  render() {
    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir">
        <div>
          <header className="h3 flex justify-between items-center bg-black-30">
            <div className="ml3">
              <Link
                className="link hover-white black-60"
                to={`/pages/profiles/${this.props.currentUser
                  .profileId}/wishlist`}
              >
                <i className="db tc ion-close black-60 hover-white" />
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
          <h4 className="tc">Local Record Stores</h4>
        </div>
        <main className="vh-100">
          <article className="db center mw5 tc black">
            <div className="tc mt2">
              <img
                alt="Map"
                className="db ba bw2 b--black-60"
                src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2FScreen%20Shot%202017-08-08%20at%2011.23.06%20AM.png?1502205843095"
              />
            </div>
          </article>
          <form className="ph2 tc">
            <div className="tc v-mid">
              <p className="tc">Location</p>
              <TextField value="Mount Pleasant, SC" />
            </div>
            <div className="center w-90">
              <Button className="w-100 bg-black ba br2 ">Search</Button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connector(MapPage)
