import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './Routes/AppRouter';

ReactDOM.render(
  
    <AppRouter/>,
  
  document.getElementById('root')
);
