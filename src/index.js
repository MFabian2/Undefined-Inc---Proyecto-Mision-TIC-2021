import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GestionVentas } from './components/gestion_ventas/GestionVentas';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome'


ReactDOM.render(
  
    <GestionVentas />,
  document.getElementById('root')
);

