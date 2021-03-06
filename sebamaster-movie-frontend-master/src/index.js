"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import App_ from './App_';
// import SearchBar from './components/search-bar';
// import Demo from './components/demo'
import WebFontLoader from 'webfontloader';
import 'react-md/dist/react-md.indigo-pink.min.css'

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

ReactDOM.render(<App />, document.getElementById('app'));
