import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import { createProfile } from '../db'
import { SET_PROFILE_X } from '../constants'
import { toUpper } from 'ramda'

class CreateProfile extends React.Component {
  render() {
    const props = this.props
    return (
      <div className="flex flex-column justify-start w-100">
        <header className="h3 flex justify-between items-center bg-black-30">
          <div className="ml3">
            <Link to="/pages/home">
              <i className="db tc black-60 hover-white ion-close" />
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

        <main className="overflow-scroll">
          <h4>Sign Up</h4>
          <form
            className="ph2"
            onSubmit={props.handleSubmit(props.profile, props.history)}
          >
            <TextField
              value={props.firstName}
              onChange={props.setFirstName}
              label="First Name"
            />

            <TextField
              value={props.lastName}
              onChange={props.setLastName}
              label="Last Name"
            />

            <TextField value={props.age} onChange={props.setAge} label="Age" />

            <TextField
              value={props.location}
              onChange={props.setLocation}
              label="Location (Optional)"
            />
            <TextField
              label="Photo (optional)"
              value={props.photo}
              onChange={props.setPhoto}
            />
            <div className="measure mt2">
              <div className="flex justify-center pv4">
                <img alt="" className="pa2 br2 mr2" src={props.photo} />
              </div>
            </div>

            <div>
              <Button className="w-100 bg-black white ba br2">
                Create Profile
              </Button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  console.log('state: ', state)
  return {
    profile: state.profile,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    age: state.profile.age,
    location: state.profile.location,
    photo: state.profile.photo
  }
}

function mapActionsToProps(dispatch) {
  const doDispatch = (field, value) => {
    dispatch({
      type: SET_PROFILE_X + toUpper(field),
      payload: value
    })
  }
  return {
    dispatch,
    handleSubmit: (profile, history) => e => {
      dispatch(createProfile(profile, history))
    },
    setFirstName: e => doDispatch('FIRSTNAME', e.target.value),
    setLastName: e => doDispatch('LASTNAME', e.target.value),
    setAge: e => doDispatch('AGE', e.target.value),
    setLocation: e => doDispatch('LOCATION', e.target.value),
    setPhoto: e => doDispatch('PHOTO', e.target.value)
  }
}

export default connector(CreateProfile)
