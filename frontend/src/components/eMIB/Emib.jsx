import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Confirmation from "./Confirmation";
import EmibTabs from "./EmibTabs";
import TestFooter from "../commons/TestFooter";
import LOCALIZE from "../../text_resources";
import ContentContainer from "../commons/ContentContainer";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import TestExamples from "./TestExamples";
import Evaluation from "./Evaluation";
import PopupBox, { BUTTON_TYPE, BUTTON_STATE } from "../commons/PopupBox";
import SystemMessage, { MESSAGE_TYPE } from "../commons/SystemMessage";
import { activateTest, deactivateTest } from "../../modules/TestStatusRedux";
import ConfirmEnterEmib from "./ConfirmEnterEmib";
import ConfirmStartTest from "../commons/ConfirmStartTest";
import EmibIntroductionPage from "./EmibIntroductionPage";
import { Helmet } from "react-helmet";

const PAGES = {
  preTest: "preTest",
  emibTabs: "emibTabs",
  confirm: "confirm"
};

const styles = {
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: "16px 0 16px 0"
  },
  checkboxZone: {
    paddingTop: 8
  },
  startTestBtn: {
    textAlign: "center",
    marginTop: 32
  }
};

//Returns array where each item indicates specifications related to How To Page including the title and the body
export const getInstructionContent = () => {
  return [
    { id: 0, text: LOCALIZE.emibTest.howToPage.overview.title, body: <Overview /> },
    {
      id: 1,
      text: LOCALIZE.emibTest.howToPage.testInstructions.title,
      body: <TestInstructions />
    },
    {
      id: 2,
      text: LOCALIZE.emibTest.howToPage.testExamples.title,
      body: <TestExamples />
    },
    { id: 3, text: LOCALIZE.emibTest.howToPage.tipsOnTest.title, body: <TipsOnTest /> },
    { id: 4, text: LOCALIZE.emibTest.howToPage.evaluation.title, body: <Evaluation /> }
  ];
};

const quitConditions = () => {
  return [
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxOne, checked: false },
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxTwo, checked: false },
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxThree, checked: false }
  ];
};

class Emib extends Component {
  static propTypes = {
    // Provided by Redux
    activateTest: PropTypes.func.isRequired,
    deactivateTest: PropTypes.func.isRequired
  };

  state = {
    curPage: PAGES.preTest,
    disabledTabs: [1, 2],
    showEnterEmibPopup: false,
    testIsStarted: false,
    showStartTestPopup: false,
    showSubmitPopup: false,
    showQuitPopup: false,
    quitConditions: quitConditions()
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.preTest:
        // Move from instructions to starting the test.
        this.setState({ curPage: PAGES.emibTabs });
        // update redux to activate test
        this.props.activateTest();
        break;
      case PAGES.emibTabs:
        this.setState({ curPage: PAGES.confirm });
        // update redux to de-activate test
        this.props.deactivateTest();
        break;
      default:
        this.setState({ curPage: PAGES.preTest });
        break;
    }
  };

  openEnterEmibPopup = () => {
    this.setState({ showEnterEmibPopup: true });
  };

  closeEnterEmibPopup = () => {
    this.setState({ showEnterEmibPopup: false });
  };

  handleStartTest = () => {
    this.setState({ testIsStarted: true, disabledTabs: [] });
  };

  openStartTestPopup = () => {
    this.setState({ showStartTestPopup: true });
  };

  closeStartTestPopup = () => {
    this.setState({ showStartTestPopup: false });
  };

  openSubmitPopup = () => {
    this.setState({ showSubmitPopup: true });
  };

  closePopup = () => {
    this.setState({ showSubmitPopup: false, showQuitPopup: false });
    //reset all checkbox states on close
    this.resetCheckboxStates();
  };

  openQuitPopup = () => {
    this.setState({ showQuitPopup: true });
  };

  resetCheckboxStates = () => {
    this.setState({ quitConditions: quitConditions() });
  };

  toggleCheckbox = id => {
    let updatedQuitConditions = Array.from(this.state.quitConditions);
    updatedQuitConditions[id].checked = !updatedQuitConditions[id].checked;
    this.setState({ quitConditions: updatedQuitConditions });
  };

  isChecked = currentCheckbox => {
    return currentCheckbox.checked;
  };

  render() {
    const { quitConditions } = this.state;
    const allChecked = quitConditions.every(this.isChecked);

    const submitButtonState = allChecked ? BUTTON_STATE.enabled : BUTTON_STATE.disabled;
    return (
      <div className="app">
        <Helmet>
          <title>{LOCALIZE.titles.eMIB}</title>
        </Helmet>
        <div>
          {this.state.curPage === PAGES.emibTabs && (
            <EmibTabs disabledTabsArray={this.state.disabledTabs} />
          )}
        </div>
        {this.state.curPage !== PAGES.emibTabs && (
          <ContentContainer hideBanner={this.state.curPage === PAGES.emibTabs}>
            {this.state.curPage === PAGES.preTest && (
              <EmibIntroductionPage showEnterEmibPopup={this.openEnterEmibPopup} />
            )}

            {this.state.curPage === PAGES.confirm && <Confirmation />}
          </ContentContainer>
        )}
        {this.state.curPage === PAGES.emibTabs && (
          <TestFooter
            startTest={this.openStartTestPopup}
            submitTest={this.openSubmitPopup}
            quitTest={this.openQuitPopup}
            testIsStarted={this.state.testIsStarted}
          />
        )}

        <ConfirmEnterEmib
          showDialog={this.state.showEnterEmibPopup}
          handleClose={this.closeEnterEmibPopup}
          enterEmib={this.changePage}
        />

        <ConfirmStartTest
          showDialog={this.state.showStartTestPopup}
          handleClose={this.closeStartTestPopup}
          startTest={this.handleStartTest}
        />

        <PopupBox
          show={this.state.showSubmitPopup}
          handleClose={this.closePopup}
          title={LOCALIZE.emibTest.testFooter.submitTestPopupBox.title}
          description={
            <div>
              <p>{LOCALIZE.emibTest.testFooter.submitTestPopupBox.warning.message}</p>
              <p>{LOCALIZE.emibTest.testFooter.submitTestPopupBox.description}</p>
            </div>
          }
          leftButtonType={BUTTON_TYPE.secondary}
          leftButtonTitle={LOCALIZE.commons.cancel}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.submitTestButton}
          rightButtonAction={this.changePage}
        />

        <PopupBox
          show={this.state.showQuitPopup}
          handleClose={this.closePopup}
          title={LOCALIZE.emibTest.testFooter.quitTestPopupBox.title}
          description={
            <div>
              <div>
                <SystemMessage
                  messageType={MESSAGE_TYPE.error}
                  title={LOCALIZE.emibTest.testFooter.quitTestPopupBox.warning.title}
                  message={LOCALIZE.emibTest.testFooter.quitTestPopupBox.warning.message}
                />
              </div>
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart1}
              </p>
              <div>
                {this.state.quitConditions.map((condition, id) => {
                  return (
                    <div
                      key={id}
                      className="custom-control custom-checkbox"
                      style={styles.checkboxZone}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={id}
                        checked={condition.checked}
                        onChange={() => this.toggleCheckbox(id)}
                      />
                      <label className="custom-control-label" htmlFor={id}>
                        {condition.text}
                      </label>
                    </div>
                  );
                })}
              </div>
              <hr style={styles.hr} />
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart2}
              </p>
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart3}
              </p>
            </div>
          }
          leftButtonType={BUTTON_TYPE.danger}
          leftButtonTitle={LOCALIZE.commons.quitTest}
          leftButtonAction={this.changePage}
          leftButtonState={submitButtonState}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.returnToTest}
        />
      </div>
    );
  }
}
export { PAGES };
export { Emib as UnconnectedEmib };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      activateTest,
      deactivateTest
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Emib);
