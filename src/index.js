import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux setup
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const defaultSubmission = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ' '
}
// Reducers
const submission = (state = defaultSubmission, action) => {
    switch(action.type) {
        case 'ADD_FEELING':
            return {...state, feeling: action.payload}
        case 'ADD_UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'ADD_SUPPORT':
            return {...state, support: action.payload}
        case 'ADD_COMMENTS':
            return {...state, comments: action.payload}
        case 'CLEAR_RESULTS':
            return {}
        default:
            return state
    }
}

const displayFeedback = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload
        default:
            return state
    }
}

// Create the store
const storeInstance = createStore(
    combineReducers({
        submission,
        displayFeedback
    }), applyMiddleware(
        logger
    ))



ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
