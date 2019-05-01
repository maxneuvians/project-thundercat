import React, { Component } from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import LOCALIZE from "../../text_resources";

const styles = {
  li: { position: "relative", display: "block", float: "left", marginBottom: "-1px" },
  button: {
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    marginRight: "2px",
    lineHeight: "1.42857143",
    border: "1px solid transparent",
    borderRadius: "4px 4px 0 0"
  },
  disabledButton: {
    color: "white",
    backgroundColor: "#8A8A8A",
    border: "none",
    lineHeight: "none",
    marginBottom: 1
  },
  active: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid #00565e",
    borderBottomColor: "white"
  }
};

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    // use this prop to disable the tab
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <span>
        {!this.props.disabled && !this.props.selected && (
          <li role="menuitem" style={styles.li}>
            <button
              id="unit-test-unselected-tab-button"
              style={styles.button}
              className="side-navigation-button"
              onClick={this.props.onClick}
            >
              {this.props.tabName}
            </button>
          </li>
        )}
        {!this.props.disabled && this.props.selected && (
          <li role="menuitem" style={styles.li} aria-current="page">
            <button
              id="unit-test-selected-tab-button"
              style={{ ...styles.button, ...styles.active }}
              className="side-navigation-button"
              onClick={this.props.onClick}
            >
              {this.props.tabName}
            </button>
          </li>
        )}
        {this.props.disabled && (
          <li role="menuitem" style={styles.li}>
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip id={`disabled-tooltip-${this.props.tabName}`}>
                  {LOCALIZE.emibTest.tabs.disabled}
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <button
                  id="unit-test-disabled-tab-button"
                  disabled={true}
                  style={{ ...styles.button, ...styles.disabledButton, pointerEvents: "none" }}
                  className="side-navigation-button"
                >
                  {this.props.tabName}
                </button>
              </span>
            </OverlayTrigger>
          </li>
        )}
      </span>
    );
  }
}

export default Tab;

export { styles };
