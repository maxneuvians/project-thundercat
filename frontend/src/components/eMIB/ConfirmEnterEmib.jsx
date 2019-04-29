import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";

class ConfirmEnterEmib extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    enterEmib: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <PopupBox
          show={this.props.showDialog}
          handleClose={this.props.handleClose}
          title={LOCALIZE.emibTest.howToPage.introductionPage.popupBox.title}
          description={
            <div>
              <p>{LOCALIZE.emibTest.howToPage.introductionPage.popupBox.description1}</p>
              <p>{LOCALIZE.emibTest.howToPage.introductionPage.popupBox.description2}</p>
            </div>
          }
          leftButtonType={BUTTON_TYPE.secondary}
          leftButtonTitle={LOCALIZE.commons.cancel}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.enterEmib}
          rightButtonAction={this.props.enterEmib}
        />
      </div>
    );
  }
}
export default ConfirmEnterEmib;
