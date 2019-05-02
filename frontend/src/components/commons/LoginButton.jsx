import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import { setLoginState } from "../../modules/LoginRedux";
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
    setLoginState: PropTypes.func,
    loggedIn: PropTypes.bool
  };

  handleLogin = () => {
    this.props.setLoginState(true);
  };

  handleLogout = () => {
    this.props.setLoginState(false);
  };

  render() {
    return (
      <div>
        {!this.props.loggedIn && (
          <button
            type="button"
            className="btn btn-primary"
            style={styles.button}
            onClick={this.handleLogin}
          >
            {LOCALIZE.commons.login}
          </button>
        )}
        {this.props.loggedIn && (
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
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoginState
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
