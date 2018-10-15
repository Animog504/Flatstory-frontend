import React from 'react'
import PropTypes from 'prop-types'
import FlatStoryGame from './game/FlatStoryGame'


const GameContainer = (props) => {
  const style = {
    border: "1px solid blue",
    height: "800px",
    padding: "10px",
    color: "white"
  }
  return (
  <div className="container" style={style}>
    GameContainer
    <div className="row">

      <div className="col">
        <span className="align-middle">
          gameArea
          
        </span>
      </div>

      <div className="col">
        <span className="align-middle">
          chatBoxArea
        </span>
      </div>

    </div>
  </div>
  )
}

export default GameContainer
