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
    setLoginState: PropTypes.func
  };

  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState({ loggedIn: true });
    this.props.setLoginState(true);
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
    this.props.setLoginState(false);
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn && (
          <button
            type="button"
            className="btn btn-primary"
            style={styles.button}
            onClick={this.handleLogin}
          >
            {LOCALIZE.commons.login}
          </button>
        )}
        {this.state.loggedIn && (
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoginState
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LoginButton);
