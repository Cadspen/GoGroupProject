import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import { Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div id='app'>
        <div className='appTitle'>
          Welcome to Go!!
        </div>
        <div className='appButtons'>
          <Link to='/board' className='appLocal' >
            Board
          </Link>
          <Link to='/local' className='appLocal' >
            Play Local
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;