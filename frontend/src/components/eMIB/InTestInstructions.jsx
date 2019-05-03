import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../eMIB/constants";

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

//Returns array where each item indicates specifications related to How To Page including the title and the body
const getInstructionContent = () => {
  return [
    {
      id: 0,
      text: LOCALIZE.emibTest.howToPage.testInstructions.title,
      body: <TestInstructions />
    },
    { id: 1, text: LOCALIZE.emibTest.howToPage.tipsOnTest.title, body: <TipsOnTest /> },
    { id: 2, text: LOCALIZE.emibTest.howToPage.evaluation.title, body: <Evaluation /> }
  ];
};

class InTestInstructions extends Component {
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
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default InTestInstructions;
