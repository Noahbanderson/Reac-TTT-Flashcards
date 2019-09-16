import React from 'react'
import { Route, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import NoMatch from './components/NoMatch'
import About from './components/About'
import Flashcards from './components/Flashcards'
import Navbar from './components/Navbar'
import Home from './components/Home'


const App = () => (

  <>
  <Navbar />
  <Container style={{ textAlign: "center", width: "1250px"}}> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/flashcards" component={Flashcards} />
      <Route component={NoMatch}/>
    </Switch>
  </Container>
  </>

)

export default App;
