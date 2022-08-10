import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './App.js';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <BrowserRouter basename='/'>
        <HelloWorld/>
    </BrowserRouter>, document.getElementById('root'));