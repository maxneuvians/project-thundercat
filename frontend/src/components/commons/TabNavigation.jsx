import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const styles = {
  tabContainer: {
    order: 1,
    textAlign: "left",
    width: "100%"
  },
  bootstrapNav: {
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    borderBottom: "none"
  },
  afterNav: {
    //this replaces the .bootstrap-tabs > .nav:after
    content: "",
    backgroundColor: "white",
    border: "1px solid #00565e",
    borderBottomColor: "transparent"
  },
  tabContent: {
    display: "block",
    WebkitTransition: "opacity 0.15s linear",
    OTransition: "opacity 0.15s linear",
    transition: "opacity 0.15s linear"
  }
};

/* this function is used to disable specific tabs using an array of tab ids 
this function is located here in order to be able to test it */
export const isTabIdDisabled = (array, tabId) => {
  // check if the tabId exists in the array
  return array.indexOf(tabId) > -1;
};

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    currentTab: PropTypes.number.isRequired,
    menuName: PropTypes.string.isRequired,
    style: PropTypes.object,

    /* used to disable specific tabs
    disabledTabsArray={[1, 2]} will disable the second and third tabs
    disabledTabsArray={[]} will keep all the tabs enabled */
    disabledTabsArray: PropTypes.array.isRequired
  };

  state = {
    currentTab: this.props.currentTab,
    currentBody: this.props.tabSpecs[this.props.currentTab].body
  };

  selectTab(id) {
    this.setState({ currentTab: id, currentBody: this.props.tabSpecs[id].body });
  }

  // this function is simply calling 'isTabIdDisabled' function with the needed parameters
  handleDisabledTabCheck = tabId => {
    if (isTabIdDisabled(this.props.disabledTabsArray, tabId)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div style={styles.tabContainer}>
        <nav aria-label={this.props.menuName} role="dialog">
          <ul role="menubar" className="nav nav-tabs" style={styles.bootstrapNav}>
            {this.props.tabSpecs.map((tab, key) => (
              <span key={tab.id}>
                <Tab
                  tabName={tab.tabName}
                  selected={tab.id === this.state.currentTab}
                  disabled={this.handleDisabledTabCheck(tab.id)}
                  onClick={() => this.selectTab(tab.id)}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </ul>
        </nav>
        <div style={styles.afterNav} />
        <div style={this.props.style}>
          <div style={styles.tabContent}>{this.state.currentBody}</div>
        </div>
      </div>
    );
  }
}

export default TabNavigation;
