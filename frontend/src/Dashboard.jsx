import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";
import { Helmet } from "react-helmet";

class Dashboard extends Component {
  static propTypes = {
    // Props from Redux
    authenticated: PropTypes.bool
  };

  render() {
    console.log(this.props.authenticated);
    return (
      <ContentContainer>
        <Helmet>
          <title>{LOCALIZE.titles.dashboard}</title>
        </Helmet>
        <h1 className="green-divider">{LOCALIZE.dashboard.title}</h1>
        {!this.props.authenticated && <p>{LOCALIZE.dashboard.descriptionIfLoggedOut}</p>}
        {this.props.authenticated && <p>{LOCALIZE.dashboard.descriptionIfLoggedIn}</p>}
      </ContentContainer>
    );
  }
}

export { Dashboard as UnconnectedDashboard };
const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.login.authenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
