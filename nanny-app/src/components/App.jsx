import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseContainer from './BaseContainer/BaseContainer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseContainer />
      </BrowserRouter>
    );
  }
}

export default App;
