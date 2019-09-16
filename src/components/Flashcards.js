import React from 'react'
import Flashcard from './Flashcard'
import {Grid, Segment} from 'semantic-ui-react'
import FlashcardForm from './FlashcardForm'

class Flashcards extends React.Component {
  state={
    flashcards: [
      {id: 1, front: "Front side of card one", back: "Back side of card one"},
      {id: 2, front: "test front two", back: "test back two"},
      {id: 3, front: "last front three", back: "last back three"}
    ]
  }
  
  getId = () => (Math.floor((1+Math.random())*10000))

  addCard = (cardData) => {
    const card = {id: this.getId(), ...cardData }
    this.setState({
      flashcards: [card, ...this.state.flashcards]  
    })
  }

  editCard = (cardData) => {
    const flashcards = this.state.flashcards.map( card => {
      if (card.id === cardData.id)
        return cardData
      return card
    })
    this.setState({flashcards})
  }

  deleteCard = (id) => {
    this.setState({flashcards: this.state.flashcards.filter(fc => fc.id !== id )})
  }

  render() {
    return (
      <div>
        <FlashcardForm addCard={this.addCard}/>
        <Grid columns={3}>
          <Grid.Row> 
            {this.state.flashcards.map( flashcard => (
            <Grid.Column key={flashcard.id} style={{height: "150px"}} >
              <Segment>
                <Flashcard  {...flashcard} editCard={this.editCard} deleteCard={this.deleteCard}/>
              </Segment>
            </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Flashcards




            