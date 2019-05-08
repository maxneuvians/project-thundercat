import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "./text_resources";

class Dashboard extends Component {
  static propTypes = {
    // Props from Redux
    authenticated: PropTypes.bool
  };

  render() {
    return (
      <div>
        <h1 className="green-divider">{LOCALIZE.dashboard.title}</h1>
        <p>{LOCALIZE.dashboard.description}</p>
      </div>
    );
  }
}

export default Dashboard;
