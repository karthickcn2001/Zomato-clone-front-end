import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from "../Components/Home/Home"
import MainFilter from '../Components/Filter/MainFilter';
import Details from '../Components/Details/Details'
import Sample from '../Components/Sample/sample'

function Router() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}></Route>
      <Route path="/filter" component={MainFilter}></Route>
      <Route path='/details' component={Details}></Route>
      <Route path='/sample' component={Sample}></Route>
      <Route path='/wp' component={Sample}></Route>

    </BrowserRouter>
  )
}

export default Router;