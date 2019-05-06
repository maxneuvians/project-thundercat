import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";
import { Helmet } from "react-helmet";
import TreeView from "./components/commons/TreeView";

class Dashboard extends Component {
  static propTypes = {
    // Props from Redux
    loggedIn: PropTypes.bool
  };

  render() {
    return (
      <ContentContainer>
        <Helmet>
          <title>{LOCALIZE.titles.dashboard}</title>
        </Helmet>
        <h1 className="green-divider">{LOCALIZE.dashboard.title}</h1>
        {!this.props.loggedIn && <p>{LOCALIZE.dashboard.descriptionIfLoggedOut}</p>}
        {this.props.loggedIn && <p>{LOCALIZE.dashboard.descriptionIfLoggedIn}</p>}
        <TreeView />
      </ContentContainer>
    );
  }
}

export { Dashboard as UnconnectedDashboard };
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.login.loggedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
