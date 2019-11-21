import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About/About";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RustOff from "./pages/RustOff/RustOff";
import PolishProtect from "./pages/PolishProtect/PolishProtect";
import MechPol from "./pages/MechPol/MechPol";
import Painting from "./pages/Painting/Painting";
import Services from "./pages/Services/Services";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase";
import Drawer from "./components/Drawer/Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      appTitle: "Автокорпус"
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,

              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Router>
            <Drawer />

            <CssBaseline />

            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/rustoff">
                <RustOff />
              </Route>
              <Route path="/polishprotect">
                <PolishProtect />
              </Route>
              <Route path="/mechpol">
                <MechPol />
              </Route>
              <Route path="/painting">
                <Painting />
              </Route>
              <Route path="/services">
                <Services />
              </Route>

              <Route
                path="/signin"
                component={SignInAndSignUp}
                currentUser={this.state.currentUser}
              />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
