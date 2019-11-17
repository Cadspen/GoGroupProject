import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Board extends Component {

  state = {
  }

  boardCube = () => {
    return(
      <div style={{ width:'40px', height:'40px', backgroundColor:'blue', borderStyle:'solid'}}/>
    )
  }

  boardCol = (size, key) => {
    return (<div key={key} style={{ display:'flex', flexDirection:'column'}}>
    {
      size.map(() => this.boardCube())
    }
    </div>)
  }

  boardRow = (size) => {

    return (<div style={{ display:'flex', flexDirection:'row'}}>
    {
      size.map(() => this.boardCol(size))
    }
    </div>)
  }

  render() {
    return (
      <div style={{}}>
        {this.boardRow([1,2,3,4,5,6,7,8,9])}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Board = connect(mapStateToProps, actions)(Board);
export default Board;