import React, {Fragment} from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            
          </Switch>
        </Fragment>
      </Router>
  
  );
}

export default App;
