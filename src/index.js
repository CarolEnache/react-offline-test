import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './styles/global.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((<App />), document.getElementById('reactMountPoint'));
});
