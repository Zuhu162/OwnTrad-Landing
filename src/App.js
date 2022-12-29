import logo from "./logo.svg";
import React, {useState, useRef} from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import "./App.css";
import Jumbo from "./components/jumbo";
import TechStack from "./components/technologyStack";
import Nav from "./components/nav";
import { Container } from "@mui/system";
import Highlights from "./components/highlights";
import Footer from "./components/footer";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
      </Container>
      <Jumbo></Jumbo>
      <Highlights />
      <Divider></Divider>
      <TechStack />
      <Footer></Footer>
    </div>
  );
}

export default App;
