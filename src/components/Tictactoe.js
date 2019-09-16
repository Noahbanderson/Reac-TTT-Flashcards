import React from 'react'
import { Grid } from 'semantic-ui-react'
import Square from './Square'

class Tictactoe extends React.Component {
  state = {
    boxes: [
      { id: 1, clicked: false },
      { id: 2, clicked: false },
      { id: 3, clicked: false },
      { id: 4, clicked: false },
      { id: 5, clicked: false },
      { id: 6, clicked: false },
      { id: 7, clicked: false },
      { id: 8, clicked: false },
      { id: 9, clicked: false },
    ],
    arrUserChoices: [],
    arrCompChoices: []
  }

  squarePressed = (i) => {
    const oppo = !i.clicked
    this.setState({
      boxes: this.state.boxes.map(box => {
        if (box.id === i.id) {
          return { id: i.id, clicked: oppo }
        } else {
          return box
        }
      })
    })

    this.setState({ arrUserChoices: [i.id, ...this.state.arrUserChoices] }, () => this.gameLogic(this.state.arrUserChoices))
  }


  compChoice = () => {
    const arrOfAvailable = this.state.boxes.filter(box => box.clicked === false) // array of arrOfAvailable boxes
    const computerNumber = Math.floor(Math.random() * arrOfAvailable.length) //array index number 

    if (arrOfAvailable.length === 0) {
      alert("It's a Tie...")
    } else {
      this.setState({
        boxes: this.state.boxes.map(box => {
          if (box.id === arrOfAvailable[computerNumber].id) {
            return { id: box.id, clicked: !box.clicked }
          }
          return box
        })
      })

      this.setState(
        { arrCompChoices: [arrOfAvailable[computerNumber].id, ...this.state.arrCompChoices] },
        () => this.gameLogic(this.state.arrCompChoices)
      )
    }

  }

  winningFunction = (array, winners) => {
    if (array === this.state.arrCompChoices) {
      alert(`Computer Wins! With squares: ${winners}`)
    } else if (array === this.state.arrUserChoices) {
      alert(`You Win! With squares: ${winners}`)
    }

  }


  gameLogic = (array) => {

    if (array.includes(1) && array.includes(2) && array.includes(3)) {
      this.winningFunction(array, [1, 2, 3])
    } else if (array.includes(4) && array.includes(5) && array.includes(6)) {
      this.winningFunction(array, [4, 5, 6])
    } else if (array.includes(7) && array.includes(8) && array.includes(9)) {
      this.winningFunction(array, [7, 8, 9])
    } else if (array.includes(1) && array.includes(4) && array.includes(7)) {
      this.winningFunction(array, [1, 4, 7])
    } else if (array.includes(2) && array.includes(5) && array.includes(8)) {
      this.winningFunction(array, [2, 5, 8])
    } else if (array.includes(3) && array.includes(6) && array.includes(9)) {
      this.winningFunction(array, [3, 6, 9])
    } else if (array.includes(1) && array.includes(5) && array.includes(9)) {
      this.winningFunction(array, [1, 5, 9])
    } else if (array.includes(3) && array.includes(5) && array.includes(7)) {
      this.winningFunction(array, [3, 5, 7])
    } else if (array === this.state.arrCompChoices) {

    } else {
      this.compChoice()
    }

  }

  render() {
    return (
      <div>
        <br />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Grid columns={3} style={{ width: "450px" }}>
            <Grid.Row >
              {this.state.boxes.map(i => (<Square squarePressed={this.squarePressed} key={i.id} i={i} />))}
            </Grid.Row>
          </Grid>
        </div>
        <div>
          Refresh to reset
        </div>
      </div>
    )
  };

}

export default Tictactoe

