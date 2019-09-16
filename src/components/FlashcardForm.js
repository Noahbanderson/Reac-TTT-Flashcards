import React from 'react'
import {Form} from 'semantic-ui-react'

class FlashcardForm extends React.Component{
  state={
    front: "",
    back: ""
  }
  componentDidMount() {
    if (this.props.id) {
      this.setState({front: this.props.front, back: this.props.back})
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editCard({ id: this.props.id, ...this.state })
      this.props.toggleEdit()
    } else {
      this.props.addCard(this.state)
      
    }
    this.setState({front: "", back: ""})
  } 

  render() {
    return (
        <Form onSubmit={this.handSubmit}>
          <Form.Group widths="equal">

            <Form.Input
            required 
            placeholder="Front"
            name="front"
            label="Front"
            value={this.state.front}
            onChange={this.handleChange}
            />

            <Form.Input
            required
            placeholder="Back" 
            name="back"
            label="Back"
            value={this.state.back}
            onChange={this.handleChange}
            />

            
              <div style={{display: "flex", alignItems: "flex-end"}}>
                <Form.Button style={{height: "37.5px"}} color="green">
                  Submit
                </Form.Button>
              </div>
            

          </Form.Group>
        </Form>
    )
  }

}

export default FlashcardForm