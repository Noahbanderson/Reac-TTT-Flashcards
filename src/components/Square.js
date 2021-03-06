import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'


class Square extends React.Component {
  state = {
    playerOnePick: false
  }

  squareClick = () => {
    this.setState({ playerOnePick: !this.state.playerOnePick }, this.props.squarePressed(this.props.i))
  }

  render() {
    return (
      <div>
        <Grid.Column

          onClick={this.squareClick}
          style={{ 
            height: "150px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "150px", 
            border: "solid black 3px" 
          }}
        >
          {this.props.i.clicked ? 
            this.state.playerOnePick ? <Icon name="check circle outline" /> : <Icon name="x" /> 
            : ""
          }

          {this.props.i.id}

        </Grid.Column>
      </div>
    )
  }

}

export default Square