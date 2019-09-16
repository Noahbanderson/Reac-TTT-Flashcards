import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import FlashcardForm from './FlashcardForm';

class Flashcard extends React.Component {
  state={
    showFront: true,
    showEdit: false
  }

  toggleShow = () => {
    this.setState({showFront: !this.state.showFront})
  }

  toggleEdit = () => {
    this.setState({showEdit: !this.state.showEdit})
  }

  

  render() {
    return (
      <div onClick={this.toggleShow}>
        {this.state.showEdit ? 
          <FlashcardForm {...this.props} toggleEdit={this.toggleEdit} />
        :
          <div>
            {this.state.showFront ? 
              this.props.front
              : 
              this.props.back
            }
          </div> 
      
        }
        <br />

        <Button icon color="blue" onClick={this.toggleEdit} >
          <Icon name="pencil" />
        </Button>

        <Button icon color="red" onClick={ () => this.props.deleteCard(this.props.id)}>
          <Icon name="trash"/>
        </Button>

      </div>
    )
  }
}

export default Flashcard













            // <Grid.Column style={{height: "250px"}} >
            //   <div>
            //     {card.showFront ? 
            //             <Card 
            //               onClick={() => props.toggleShowFunction(card)} 
            //               style={{padding: "10px", height: "125px"} }
            //             >
            //               <Card.Description as="h3">
            //                 {card.front}
            //               </Card.Description>
            //               <Card.Meta>
            //                 <span> Correct: {card.correct}, Wrong: {card.wrong} </span>
            //               </Card.Meta>
            //             </Card>
            //     :
            //             <div>
            //               <Card  onClick={() => props.toggleShowFunction(card)} header={card.back} style={{padding: "10px", height: "125px"} } />
            //               <Button onClick={() => props.upCorrect(card) }>I Got it Right!</Button>
            //               <Button onClick={() => props.upWrong(card) }>I Got it Wrong</Button>
            //             </div> 
            //     }
            //     <br/>
            //     <Button color="blue" onClick={() => props.editCard(card)} >Edit</Button>
            //     <Button color="red" onClick={() => props.deleteCard(card)} >Delete</Button>
            //     <hr />
            //   </div>
            // </Grid.Column>