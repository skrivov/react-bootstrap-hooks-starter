import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Speakers from "./Speakers";
import Sessions from "./Sessions";
import "./App.css";
export const ConfigContext = React.createContext();

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
       
          <Switch>
            <Route path="/sessions">
              <Sessions />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/">
              <Sessions />
            </Route>
          </Switch>
     
      </Router>
    </Container>
  );
}

export default App;
