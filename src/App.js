import React, {Fragment} from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  return (
     <div className="app">
       <Dashboard />
     </div>
  
  );
}

export default App;
