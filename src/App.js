import logo from "./logo.svg";
import "./App.css";
import Jumbo from "./components/jumbo";
import TechStack from "./components/technologyStack";
import Nav from "./components/nav";
import { Container } from "@mui/system";
import Highlights from "./components/highlights";
import Footer from "./components/footer";
import Divider from "@mui/material/Divider";
//const reach = loadStdlib("ALGO");
//reach.setWalletFallback(reach.walletFallback({providerEnv:'TestNet', MyAlgoConnect }));

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
