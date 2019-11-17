import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
// import { Link } from 'react-router-dom'

class LocalSetup extends Component {

  state = {
  }

  render() {
    return (
      <div id='localSetup'>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
LocalSetup = connect(mapStateToProps, actions)(LocalSetup);
export default LocalSetup;