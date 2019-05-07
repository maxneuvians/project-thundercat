import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import LOCALIZE from "../../text_resources";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";

const styles = {
  loginComponent: {
    maxWidth: 600
  }
};

class AuthenticationTabs extends Component {
  //TODO(fnormand): Remove this part when implementing login functionality in the backend
  //===========================================
  static propTypes = {
    authentification: PropTypes.func
  };

  state = {
    isAuthenticated: false
  };

  authentification = () => {
    this.setState({ isAuthenticated: true });
    this.props.authentification();
  };
  //===========================================

  render() {
    const TABS = [
      {
        key: "login",
        tabName: LOCALIZE.authentication.login.title,
        body: <LoginForm authentification={this.authentification} />
      },
      {
        key: "account",
        tabName: LOCALIZE.authentication.createAccount.title,
        body: <CreateAccountForm />
      }
    ];
    return (
      <div>
        {!this.state.isAuthenticated && (
          <Container>
            <Row className="justify-content-md-center">
              <Col style={styles.loginComponent}>
                <Tabs defaultActiveKey="login" id="login-tabs">
                  {TABS.map((tab, index) => {
                    return (
                      <Tab key={index} eventKey={tab.key} title={tab.tabName}>
                        {tab.body}
                      </Tab>
                    );
                  })}
                </Tabs>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default AuthenticationTabs;
