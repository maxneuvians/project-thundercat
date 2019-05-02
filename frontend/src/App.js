import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/cat-theme.css";
import { Helmet } from "react-helmet";
import Status from "./Status";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Prototype from "./Prototype";
import Emib from "./components/eMIB/Emib";
import LoginButton from "./components/commons/LoginButton";
import Translation from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import canada_logo from "./images/canada_logo.png";
import { Navbar, Nav } from "react-bootstrap";

const PATH = {
  home: "/",
  dashboard: "/dashboard",
  prototype: "/prototype",
  status: "/status",
  emibSampleTest: "/emib-sample"
};

const styles = {
  navBarFull: {
    paddingBottom: 105
  },
  navBarHidden: {
    paddingBottom: 50
  },
  tabs: {
    paddingTop: 68
  },
  pscImage: {
    position: "fixed",
    top: 20,
    left: 20
  },
  loginButton: {
    position: "fixed",
    right: 115,
    top: 15,
    left: "auto"
  },
  languageButton: {
    position: "fixed",
    right: 15,
    top: 15,
    left: "auto"
  }
};

//Check if the home page is selected
const isHomeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.home;
};

//Check if the dashboard page is selected
const isDashboardActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.dashboard;
};

//Check if the Prototype page is selected even when you start the eMIB Sample Test
const isPrototypeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  if (pathname === PATH.prototype || pathname === PATH.emibSampleTest) {
    return pathname === PATH.prototype || pathname === PATH.emibSampleTest;
  }
};

//Check if the Status page is selected
const isStatusActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.status;
};

class App extends Component {
  static propTypes = {
    // Props from Redux
    loggedIn: PropTypes.bool,
    currentLanguage: PropTypes.string,
    isTestActive: PropTypes.bool.isRequired
  };

  render() {
    const hideNavBar = this.props.isTestActive;
    const { isTestActive } = this.props;
    return (
      <div>
        <Helmet>
          <html lang={this.props.currentLanguage} />
          <title>{LOCALIZE.titles.CAT}</title>
        </Helmet>
        <Router>
          <div>
            {!isTestActive && (
              <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                  <img alt="" src={canada_logo} width="30" className="d-inline-block align-top" />
                  {"Public Service Commission"}
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/prototype">Prototype</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/status">Status</Nav.Link>
                </Nav>
                <LoginButton />
                <Translation />
              </Navbar>
            )}
            {isTestActive && (
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  <img alt="" src={canada_logo} width="30" className="d-inline-block align-top" />
                  {"Public Service Commission"}
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Translation />
                </Nav>
              </Navbar>
            )}
            <Route exact path={PATH.home} component={Home} />
            <Route path={PATH.dashboard} component={Dashboard} />
            <Route path={PATH.prototype} component={Prototype} />
            <Route path={PATH.status} component={Status} />
            <Route path={PATH.emibSampleTest} component={Emib} />
          </div>
        </Router>
      </div>
    );
  }
}
export { PATH };

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.login.loggedIn,
    currentLanguage: state.localize.language,
    isTestActive: state.testStatus.isTestActive
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
