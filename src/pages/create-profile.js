{
  /*import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import { toUpper, compose, path, head, pathOr } from 'ramda'

const CreateProfile = () => {
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
        <form className="ph2">
          <TextField
            value={props.profile.firstName}
            onChange={props.setFirstName}
            label="First Name"
            optional={false}
            help="Enter First Name"
          />

          <TextField
            value={props.profile.lastName}
            onChange={props.setLastName}
            label="Last Name"
            optional={false}
            help="Enter Last Name"
          />

          <TextField
            value={props.profile.age}
            onChange={props.setAge}
            label="Age"
            optional={false}
            help="Enter Age"
          />

          <TextField
            value={props.profile.location}
            onChange={props.setLocation}
            label="Location"
            optional={true}
            help="Enter Location (optional)"
          />

          <div className="measure mt2">
            <label className="f6 b db mb2">Photo (optional)</label>
            <div className="flex justify-center pv4">
              <img
                alt="Placeholder"
                className="ba pa2 br2 mr2"
                src="https://placehold.it/64x64?text='photo'"
              />
              <div className="pv3 ml2">
                <Button className="bg-black white ba br2 black">Upload</Button>
              </div>
            </div>
          </div>

          <div className="">
            <Link to="/pages/view-profile">
              <Button className="w-100 bg-black white ba br2">
                Create Profile
              </Button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
  return {
    profile: state.profile
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
    submitProfile: (_id, history) => e => {
      e.preventDefault()
      if (_id) {
        dispatch(updateProfile(history))
      } else {
        dispatch(createProfile(history))
      }
    },
    setFirstName: e => doDispatch('FIRSTNAME', e.target.value),
    setLastName: e => doDispatch('LASTNAME', e.target.value),
    setAge: e => doDispatch('AGE', e.target.value),
    setLocation: e => doDispatch('LOCATION', e.target.value)
  }
}


export default connector(CreateProfile)
*/
}
