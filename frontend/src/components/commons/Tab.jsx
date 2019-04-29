import React, { Component } from "react";
import PropTypes from "prop-types";

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
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "#8A8A8A",
    marginRight: "2px",
    border: "none",
    borderRadius: "4px 4px 0 0",
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
    disabled: PropTypes.bool
  };

  render() {
    return (
      <span>
        {!this.props.disabled && (
          <span>
            {this.props.selected === false && (
              <li role="menuitem" style={styles.li}>
                <button
                  id="unit-test-unselected-tab-button"
                  style={styles.button}
                  className="side-navigation-button"
                >
                  {this.props.tabName}
                </button>
              </li>
            )}
            {this.props.selected === true && (
              <li role="menuitem" style={styles.li} aria-current="page">
                <button
                  id="unit-test-selected-tab-button"
                  style={{ ...styles.button, ...styles.active }}
                  className="side-navigation-button"
                >
                  {this.props.tabName}
                </button>
              </li>
            )}
          </span>
        )}
        {this.props.disabled && (
          <li role="menuitem" style={styles.li}>
            <button
              id="unit-test-disabled-tab-button"
              disabled={true}
              style={styles.disabledButton}
              className="side-navigation-button"
            >
              {this.props.tabName}
            </button>
          </li>
        )}
      </span>
    );
  }
}

export default Tab;

export { styles };
