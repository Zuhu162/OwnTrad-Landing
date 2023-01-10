import logo from "./logo.svg";
import React, {useState, useRef} from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import "./App.css";
import Nav from "./components/nav";
import { Container } from "@mui/system";
import Login from "./components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let toggleLogIn = () => {
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  }

  console.log(loggedIn)

  return (
    <div className="App">
      <Nav logOut={toggleLogIn}></Nav>
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Dashboard></Dashboard> : <Login loggedIn={() => toggleLogIn()}></Login>}
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
