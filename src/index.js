import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import AudioF from './components/index.jsx';

const audioFiles = [
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    },
    {
        label: 1,
        autor: 'Mario Castle'
    }
];


ReactDOM.render(<AudioF />, document.querySelector("#root"));