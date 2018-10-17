import React from 'react'
import PropTypes from 'prop-types'
import FlatStoryGame from './game/FlatStoryGame'


class ContentContainer extends React.Component{
  render(){
    const style = {
      border: "1px solid blue",
      height: "800px",
      padding: "10px",
      color: "white"
    }

  return (

      <div className="container" style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default ContentContainer
