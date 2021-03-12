import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar";
import LatestPublish from "./components/LatestPublish";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="App-wrap">
          <Switch>
            <Route exact path="/" />
            <Route path="/publicaciones">
              <LatestPublish />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
