import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class App extends Component {

  state = {
    change : 22
  }

  render() {
    return (
      <div>
        Welcome to GO LTE Group Project
        {this.props.change}
        <button onClick={() => this.props.changeState({ change : this.props.change + 1})}/>
        <button onClick={() => this.setState({ change : this.state.change + 1})}/>
        {this.state.change}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;