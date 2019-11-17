import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Board extends Component {

  state = {
  }

  boardCube = () => {
    return(
      <div style={{ width:'10px', height:'10px', backgroundColor:'black', borderStyle:'solid'}}/>
    )
  }

  boardCol = (size) => {
    return (<div style={{ display:'flex', flexDirection:'column'}}>
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
      <div>
        {this.boardRow(3)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Board = connect(mapStateToProps, actions)(Board);
export default Board;