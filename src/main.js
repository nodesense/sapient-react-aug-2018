//main.js
// bootstrap React App into browser
import React from 'react';
import {render} from 'react-dom'; // real-dom/diff/queue/events

import App from './app/App';

// Provider pass the store value to containers through globally
// react context
import {Provider} from 'react-redux';
import store from './app/store';
 
// Virtual DOM to REAL DOM, not vice versa
// one direction
render( <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('root') //real dom
)