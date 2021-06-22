import React from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component = {Home}/>    
      <Route path="/movies/:movieId" component={Movie} />
      <Route path="/*" component={NotFound}/>
    </Switch>
    <GlobalStyle/>
  </Router>
);

export default App;
