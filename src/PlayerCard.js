import React from 'react'
import PropTypes from 'prop-types'

class PlayerCard extends React.Component {
  render (){

    return (
      <div>
        {this.props.currentPlayer ?
          <table>
            <tr>
              <td>
                {this.props.currentPlayer.playerAvatar? <img src={this.props.currentPlayer.playerAvatar} width="40px" height="40px" /> : null}
              </td>
              <td>
                <strong>{this.props.currentPlayer.playerName}</strong>
                <p>{this.props.currentPlayer.playerScore}</p>
              </td>
            </tr>
          </table>
           : null}

      </div>
    )
  }
}

export default PlayerCard;
