import React from 'react';
import { Router } from "react-router-dom";

import { history } from "../config";
import { RenderRoutes } from "./RenderRoutes";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <RenderRoutes />
      </Router>

    );
  }
}

export default App;
