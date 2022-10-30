import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const App = () => {
  return <div>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
}

export default App