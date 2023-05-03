import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
