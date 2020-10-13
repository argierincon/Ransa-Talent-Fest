import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/Router';
import './assets/styles/global.scss';

ReactDom.render(<Router />, document.getElementById('app'));
