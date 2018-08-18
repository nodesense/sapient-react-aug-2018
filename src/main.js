//main.js
// bootstrap React App into browser
import React from 'react';
import {render} from 'react-dom'; // real-dom/diff/queue/events

import App from './app/App';
 
// Virtual DOM to REAL DOM, not vice versa
// one direction
render( <App />,  // v.dom
        document.getElementById('root') //real dom
)