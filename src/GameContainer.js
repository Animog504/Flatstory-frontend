import React from 'react'
import PropTypes from 'prop-types'

const GameContainer = (props) => {
  const style = {
    border: "1px solid blue",
    height: "800px",
    padding: "10px",
    color: "white"
  }
  return (
    <div className="container" style={style}>
  <div className="row">

    <div className="col">
      <span className="align-middle">
        Game Conatiner Column
      </span>
    </div>

    <div className="col">
      <span className="align-middle">
        Game Chat Box
      </span>
    </div>

  </div>
</div>
  )
}

export default GameContainer
