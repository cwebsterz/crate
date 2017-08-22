import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser.profileId}/crate`}
            >
              <i className="db tc hover-white icon ion-close" />
            </Link>
          </div>
          <div className="f4">
            <img
              alt="Logo"
              className="h3 w3"
              src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
            />
          </div>
          <div className="mr3">
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser
                .profileId}/search-albums`}
            >
              <i className="db tc hover-white ion-search" />
            </Link>
          </div>
        </header>

        <main className="vh-100 bg-white">
          <h4 className="tc">crate V 1.0</h4>
          <div className="tc">Developed by Cullen Webster</div>
          <div className="h3 flex flex-row justify-between items-center">
            <div className="ml5">
              <a
                className="link hover-white black-60"
                href="https://twitter.com/CullenWebster"
              >
                <i className="db ion-social-twitter grow" />
              </a>
            </div>
            <div>
              <a
                className="link hover-white black-60"
                href="www.github.com/cwebsterz"
              >
                <i className="db ion-social-github grow" />
              </a>
            </div>
            <div className="mr5">
              <i className="db ion-social-linkedin link grow" href="#" />
            </div>
          </div>
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

export default connector(AboutPage)
