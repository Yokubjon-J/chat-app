import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld.js';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(<BrowserRouter><HelloWorld/></BrowserRouter>, document.getElementById('root'));