import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  button: {
    width: 125
  }
};

class LoginButton extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn && (
          <button type="button" className="btn btn-primary" style={styles.button}>
            {LOCALIZE.commons.login}
          </button>
        )}
        {this.state.loggedIn && (
          <button type="button" className="btn btn-primary" style={styles.button}>
            {LOCALIZE.commons.logout}
          </button>
        )}
      </div>
    );
  }
}

export default LoginButton;
