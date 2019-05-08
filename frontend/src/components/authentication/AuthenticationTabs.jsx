import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../commons/TabNavigation";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import LOCALIZE from "../../text_resources";
import { connect } from "react-redux";

const styles = {
  container: {
    width: 500,
    margin: "0px auto",
    paddingTop: 24,
    paddingRight: 20,
    paddingLeft: 20
  },
  tabNavigationStyle: {
    height: "100%",
    backgroundColor: "white",
    borderWidth: "1px 1px 1px 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderTopColor: "white",
    marginBottom: 25
  }
};

class AuthenticationTabs extends Component {
  static propTypes = {
    // Props from Redux
    authenticated: PropTypes.bool
  };

  render() {
    const TABS = [
      {
        id: 0,
        tabName: LOCALIZE.authentication.login.title,
        body: <LoginForm />
      },
      {
        id: 1,
        tabName: LOCALIZE.authentication.createAccount.title,
        body: <CreateAccountForm />
      }
    ];
    return (
      <div>
        {!this.props.authenticated && (
          <div style={styles.container}>
            <TabNavigation
              tabSpecs={TABS}
              initialTab={0}
              menuName={LOCALIZE.ariaLabel.authenticationMenu}
              style={styles.tabNavigationStyle}
              disabledTabsArray={[]}
            />
          </div>
        )}
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
)(AuthenticationTabs);
