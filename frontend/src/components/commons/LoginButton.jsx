import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  button: {
    width: 136
  }
};

class LoginButton extends Component {
  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState({ loggedIn: true });
  };

  handleLogoff = () => {
    this.setState({ loggedIn: false });
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
            onClick={this.handleLogoff}
          >
            {LOCALIZE.commons.logout}
          </button>
        )}
      </div>
    );
  }
}

export default LoginButton;
