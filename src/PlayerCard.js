import React from 'react'
import PropTypes from 'prop-types'

class PlayerCard extends React.Component {
  render (){
    
    return (
      <div>
        {this.props.currentPlayer ?
          <table>
            <tbody>
              <tr>
                <td>
                  {this.props.currentPlayer.avatar ? <img src={this.props.currentPlayer.avatar} width="40px" height="40px" /> : null}
                </td>
                <td>
                  <strong>{this.props.currentPlayer.username}</strong>
                  <p>{this.props.currentPlayer.score}</p>
                </td>
              </tr>
            </tbody>
          </table>
           : null}

      </div>
    )
  }
}

export default PlayerCard;
