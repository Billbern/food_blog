import React from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Home, Recipes, Tips, About } from "./components/pages/page";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer/>
        </div>
    </Router>
  );
}
