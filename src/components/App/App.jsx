import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Confirm from '../Confirm/Confirm';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <Route exact path='/'>
            <Feeling />
          </Route>
          <Route exact path='/support'>
            <Support />
          </Route>
          <Route exact path='/understanding'>
            <Understanding />
          </Route>
          <Route exact path='/comments'>
            <Comments />
          </Route>
          <Route exact path='/confirm'>
            <Confirm />
          </Route>
        </header>
      </div>
    </Router>

  );
}

export default App;
