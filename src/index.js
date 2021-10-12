import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InterfazInformacionVentas from './componentes/InterfazInformacionVentas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './Routes/AppRouter';

ReactDOM.render(
  
    <AppRouter/>,
  
  document.getElementById('root')
);
