import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";
import { Helmet } from "react-helmet";

const styles = {
  title: {
    color: "black"
  }
};

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
        <h2 className="green-divider" style={styles.title}>
          {LOCALIZE.dashboard.title}
        </h2>
        {!this.props.loggedIn && <p>{LOCALIZE.dashboard.descriptionIfLoggedOut}</p>}
        {this.props.loggedIn && <p>{LOCALIZE.dashboard.descriptionIfLoggedIn}</p>}
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
