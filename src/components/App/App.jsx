import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Confirm from '../Confirm/Confirm';
import Success from '../Success/Success.jsx';
import Admin from '../Admin/Admin.jsx'

function App() {

  const dispatch = useDispatch();

  const fetchFeedback = () =>{
    axios.get('/feedback')
          .then(response => {
            console.log('GET response: ', response);
            dispatch({
              type: 'SET_FEEDBACK',
              payload: response.data
            })
          }).catch(err => {
            console.log('Error on GET: ', err);
          })
  }

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
          <Route exact path='/success'>
            <Success />
          </Route>
          <Route>
            <Admin fetchFeedback={fetchFeedback} />
          </Route>
        </header>
      </div>
    </Router>

  );
}

export default App;
