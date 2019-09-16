import React from 'react'
import { Grid } from 'semantic-ui-react'
import SquareTwo from './SquareTwo'

class Tictactoetwo extends React.Component {
    state = {
        boxes: [
            { id: 1, clicked: false},
            { id: 2, clicked: false},
            { id: 3, clicked: false},
            { id: 4, clicked: false},
            { id: 5, clicked: false},
            { id: 6, clicked: false},
            { id: 7, clicked: false},
            { id: 8, clicked: false},
            { id: 9, clicked: false},
        ],
        arrUserChoices: [],
        arrCompChoices: [],
        playerOneTurn: true,
        playerTwoTurn: false
    }

    squarePressed = (i) => {
        this.setState({
            boxes: this.state.boxes.map(box => {
                if (box.id === i.id) {
                    return { id: i.id, clicked: !i.clicked}
                } else {
                    return box
                }
            })
        })

        if (this.state.playerOneTurn === true) {
            this.setState({ arrUserChoices: [i.id, ...this.state.arrUserChoices] }, () => this.gameLogic(this.state.arrUserChoices))
        } else if (this.state.playerTwoTurn === true) {
            this.setState({ arrCompChoices: [i.id, ...this.state.arrCompChoices] }, () => this.gameLogic(this.state.arrCompChoices))
        }

        this.setState({ playerOneTurn: !this.state.playerOneTurn, playerTwoTurn: !this.state.playerTwoTurn })
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
        } 

    }

    winningFunction = (array, winners) => {
        if (array === this.state.arrCompChoices) {
            alert(`Player Two Wins! With squares: ${winners}`)
        } else if (array === this.state.arrUserChoices) {
            alert(`Player One Wins! With squares: ${winners}`)
        }

    }

    render() {
        return (
            <div>
                <br />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid columns={3} style={{ width: "450px" }}>
                        <Grid.Row >
                            {this.state.boxes.map(i => (
                                <SquareTwo 
                                    playerOneTurn={this.state.playerOneTurn}    
                                    playerTwoTurn={this.state.playerTwoTurn} 
                                    squarePressed={this.squarePressed} 
                                    key={i.id} 
                                    i={i} 
                                />
                            ))}
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

export default Tictactoetwo