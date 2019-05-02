import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/cat-theme.css";
import { Helmet } from "react-helmet";
import Status from "./Status";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Emib from "./components/eMIB/Emib";
import LoginButton from "./components/commons/LoginButton";
import Translation from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import canada_logo from "./images/canada_logo.png";
import { Navbar, Nav } from "react-bootstrap";

const PATH = {
  home: "/",
  dashboard: "/dashboard",
  status: "/status",
  emibSampleTest: "/emib-sample"
};

class App extends Component {
  static propTypes = {
    // Props from Redux
    loggedIn: PropTypes.bool,
    currentLanguage: PropTypes.string,
    isTestActive: PropTypes.bool.isRequired
  };

  render() {
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
                <Navbar.Brand href="/">
                  <img alt="" src={canada_logo} width="30" className="d-inline-block align-top" />
                  {"Public Service Commission"}
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/emib-sample">Sample Test</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/status">Status</Nav.Link>
                </Nav>
                <LoginButton />
                <Translation variant="secondary" />
              </Navbar>
            )}
            {isTestActive && (
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                  <img alt="" src={canada_logo} width="30" className="d-inline-block align-top" />
                  {"Public Service Commission"}
                </Navbar.Brand>
                <Nav className="mr-auto" />
                <Translation variant="outline-light" />
              </Navbar>
            )}
            <Route exact path={PATH.home} component={Home} />
            <Route path={PATH.dashboard} component={Dashboard} />
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
