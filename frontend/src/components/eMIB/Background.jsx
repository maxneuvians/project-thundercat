import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TeamInformation from "./TeamInformation";
import BackgroundInformation from "./BackgroundInformation";
import OrganizationalInformation from "./OrganizationalInformation";
import OrganizationalStructure from "./OrganizationalStructure";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../eMIB/constants";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const BODY_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`;

const styles = {
  bodyContent: {
    overflow: "auto",
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: BODY_HEIGHT
  },
  nav: {
    marginTop: 10,
    marginLeft: 10
  }
};

export const getInstructionContent = () => {
  return [
    {
      id: 0,
      text: LOCALIZE.emibTest.background.backgroundInformation.title,
      body: <BackgroundInformation />
    },
    {
      id: 1,
      text: LOCALIZE.emibTest.background.organizationalInformation.title,
      body: <OrganizationalInformation />
    },
    {
      id: 2,
      text: LOCALIZE.emibTest.background.organizationalStructure.title,
      body: <OrganizationalStructure />
    },
    {
      id: 3,
      text: LOCALIZE.emibTest.background.teamInformation.title,
      body: <TeamInformation />
    }
  ];
};

class Background extends Component {
  render() {
    const SPECS = getInstructionContent();
    return (
      <Tab.Container id="left-tabs-instructions" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column" style={styles.nav}>
              <Nav.Item>
                <Nav.Link eventKey="first">{SPECS[0].text}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">{SPECS[1].text}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">{SPECS[2].text}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">{SPECS[3].text}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={styles.bodyContent}>{SPECS[0].body}</div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div style={styles.bodyContent}>{SPECS[1].body}</div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div style={styles.bodyContent}>{SPECS[2].body}</div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div style={styles.bodyContent}>{SPECS[3].body}</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Background;
