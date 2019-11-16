import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class App extends Component {

  state = {
  }

  // Swapp Original Website into this and this new one to mobile

  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;