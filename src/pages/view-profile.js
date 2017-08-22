import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showProfile } from '../db'

class ViewProfile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatch(showProfile(id))
  }

  render() {
    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir">
        <div>
          <header className="h3 flex justify-between items-center bg-black-30">
            <div className="ml3">
              <Link className="link black-60 hover-white" to="/">
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
        <main className="vh-100 pa4">
          <div className="db center mw5 tc black">
            <img
              className="db ba b--black-10"
              alt="Album Cover"
              src={
                this.props.photo
                  ? this.props.photo
                  : `https://placehold.it/200x200/?text='Profile Photo'`
              }
            />
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="ml0">
                {this.props.firstName + ' ' + this.props.lastName}
              </dd>
              <dt className="clip">Artist</dt>
              <dd className="ml0 gray">
                {this.props.age}
              </dd>
              <dt className="clip">Desc</dt>
              <dd className="ml0">
                {this.props.location}
              </dd>
            </dl>
          </div>
        </main>

        <footer className="h3 flex flex-row justify-between items-center bg-black-30">
          <div className="ml3">
            <Link
              className="link black-60 hover-white"
              to={`/pages/profiles/${this.props.currentUser.profileId}/crate`}
            >
              <i className="db tc black-60 hover-white ion-disc" />
            </Link>
          </div>
          <div>
            <Link
              className="link hover-white black-60"
              to={`/pages/profiles/${this.props.currentUser
                .profileId}/wishlist`}
            >
              <i className="db tc black-60 hover-white ion-ios-paper" />
            </Link>
          </div>
          <div className="mr3">
            <Link className="link black-60 hover-white" to="/pages/about">
              <i className="db tc black-60 hover-white ion-information-circled" />
            </Link>
          </div>
        </footer>
      </div>
    )
  }
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    profile: state.profile,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    location: state.profile.location,
    age: state.profile.age,
    photo: state.profile.photo,
    currentUser: state.currentUser
  }
}

export default connector(ViewProfile)
