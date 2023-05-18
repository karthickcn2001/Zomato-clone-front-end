import React from 'react';
import { createRoot } from 'react-dom/client';
/* import ReactDOM from 'react-dom'; */
/* import './index.css'; */
//import Router from './Components/Router';
//import Filter from './Components/Filter';
//import { Router } from 'react-router-dom';

//import Header from './Components/Header';

//import Home from './Components/Home';

import Router from './Components/Router';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
); */

/* ReactDOM.render(
  <Router/>,
  document.getElementById('root')
) */

createRoot(document.getElementById('root')).render(<Router />);