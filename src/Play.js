import React from 'react'
import PropTypes from 'prop-types'
import FlatStoryGame from './game/FlatStoryGame.js'

const Play = (props) => {
  return (
    <React.Fragment>
        <FlatStoryGame />
        <script src="/socket.io/socket.io.js?x92588"></script>
    </React.Fragment>
  )
}

export default Play
