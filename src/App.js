import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import navButtons from "./config/buttons";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import { socialButtons } from "./config/buttons";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RustOff from "./pages/RustOff/RustOff";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase";
import ControlledSelectDemo from "./pages/RustOff/ControlledSelectDemo";

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

          console.log("state:", this.state);
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
        <Header
          appTitle={this.state.appTitle}
          socialButtons={socialButtons}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/rustoff">
            <RustOff />
          </Route>
          <Route path="/demo">
            <ControlledSelectDemo />
          </Route>
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>

        <Nav navButtons={navButtons} />
      </div>
    );
  }
}

export default App;
