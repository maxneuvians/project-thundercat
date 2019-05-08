import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";
import LoginTabs from "./components/authentication/AuthenticationTabs";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

class Home extends Component {
  static propTypes = {
    // Props from Redux
    authenticated: PropTypes.bool
  };

  render() {
    return (
      <div className="app">
        <Helmet>
          <title>{LOCALIZE.titles.home}</title>
        </Helmet>
        <ContentContainer>
          <h1>{LOCALIZE.homePage.title}</h1>
          <p>{LOCALIZE.homePage.description}</p>
          <div>
            <LoginTabs authentification={this.authentification} />
          </div>
          {this.props.authenticated && (
            <div>
              <h3>Welcome!</h3>
              <p>You've just logged in.</p>
            </div>
          )}
        </ContentContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.login.authenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
