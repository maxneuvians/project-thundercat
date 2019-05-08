import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import { logoutAction } from "../../modules/LoginRedux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const styles = {
  button: {
    width: 136
  }
};

class LoginButton extends Component {
  static propTypes = {
    // Props from Redux
    authenticated: PropTypes.bool,
    logoutAction: PropTypes.func
  };

  handleLogin = () => {};

  handleLogout = () => {
    this.props.logoutAction();
  };

  render() {
    return (
      <div>
        {!this.props.authenticated && (
          <button
            type="button"
            className="btn btn-primary"
            style={styles.button}
            onClick={this.handleLogin}
          >
            {LOCALIZE.commons.login}
          </button>
        )}
        {this.props.authenticated && (
          <button
            type="button"
            className="btn btn-primary"
            style={styles.button}
            onClick={this.handleLogout}
          >
            {LOCALIZE.commons.logout}
          </button>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logoutAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
