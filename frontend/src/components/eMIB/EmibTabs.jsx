import React, { Component } from "react";
import PropTypes from "prop-types";
import Background from "./Background";
import Inbox from "./Inbox";
import LOCALIZE from "../../text_resources";
import TabNavigation from "../commons/TabNavigation";
import InTestInstructions from "./InTestInstructions";
import Notepad from "../commons/Notepad";
import "../../css/emib-tabs.css";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "./constants";
import { Helmet } from "react-helmet";

const TAB_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`;

const styles = {
  container: {
    maxWidth: 1400,
    minWidth: 900,
    margin: "0px auto",
    paddingTop: 20,
    display: "flex",
    paddingRight: 20,
    paddingLeft: 20
  },
  tabNavigation: {
    height: TAB_HEIGHT,
    backgroundColor: "white",
    borderWidth: "0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderTopColor: "white"
  }
};

class EmibTabs extends Component {
  static propTypes = {
    /* used to disable specific tabs
    disabledTabsArray={[1, 2]} will disable the second and third tabs
    disabledTabsArray={[]} will keep all the tabs enabled */
    disabledTabsArray: PropTypes.array
  };

  render() {
    const TABS = [
      {
        id: 0,
        tabName: LOCALIZE.emibTest.tabs.instructionsTabTitle,
        body: <InTestInstructions />
      },
      {
        id: 1,
        tabName: LOCALIZE.emibTest.tabs.backgroundTabTitle,
        body: <Background />
      },
      {
        id: 2,
        tabName: LOCALIZE.emibTest.tabs.inboxTabTitle,
        body: <Inbox />
      }
    ];
    return (
      <div style={styles.container}>
        <Helmet>
          <title>{LOCALIZE.titles.simulation}</title>
        </Helmet>
        <TabNavigation
          tabSpecs={TABS}
          currentTab={0}
          menuName={LOCALIZE.ariaLabel.tabMenu}
          style={styles.tabNavigation}
          disabledTabsArray={this.props.disabledTabsArray}
        />
        <Notepad />
      </div>
    );
  }
}

export default EmibTabs;
