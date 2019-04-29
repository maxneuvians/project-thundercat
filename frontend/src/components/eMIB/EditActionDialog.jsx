import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";
import SystemMessage, { MESSAGE_TYPE } from "../commons/SystemMessage";
import { ACTION_TYPE, EDIT_MODE, actionShape, emailShape } from "./constants";
import EmailContent from "./EmailContent";
import {
  addEmail,
  addTask,
  updateEmail,
  updateTask,
  readEmail
} from "../../modules/EmibInboxRedux";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto",
    width: 700,
    paddingBottom: 12
  },
  originalEmail: {
    padding: "0 12px",
    marginRight: 12,
    border: "1px #00565E solid",
    borderRadius: 4
  },
  icon: {
    float: "left",
    marginTop: 14,
    marginRight: 8
  },
  dialogHeaderText: {
    float: "left",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  modalHeader: {
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: "9px 9px 0px 0px",
    paddingTop: 0,
    paddingBottom: 0
  },
  closeButton: {
    backgroundColor: "transparent",
    float: "right",
    color: "white",
    border: 0,
    marginTop: 11
  },
  modalBody: {
    paddingTop: 0,
    paddingBottom: 0
  },
  fullWidth: {
    width: "100%"
  }
};

class EditActionDialog extends Component {
  static propTypes = {
    email: emailShape,
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    actionType: PropTypes.oneOf(Object.keys(ACTION_TYPE)).isRequired,
    editMode: PropTypes.oneOf(Object.keys(EDIT_MODE)).isRequired,
    // Provided from Redux.
    addEmail: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    readEmail: PropTypes.func.isRequired,
    // Only needed when updating an existing one
    action: actionShape,
    actionId: PropTypes.number
  };

  state = {
    action: {},
    showCancelConfirmationDialog: false
  };

  handleSave = () => {
    this.props.handleClose();
    if (this.props.actionType === ACTION_TYPE.email && this.props.editMode === EDIT_MODE.create) {
      this.props.addEmail(this.props.email.id, this.state.action);
      this.props.readEmail(this.props.email.id);
    } else if (
      this.props.actionType === ACTION_TYPE.task &&
      this.props.editMode === EDIT_MODE.create
    ) {
      this.props.addTask(this.props.email.id, this.state.action);
      this.props.readEmail(this.props.email.id);
    } else if (
      this.props.actionType === ACTION_TYPE.email &&
      this.props.editMode === EDIT_MODE.update
    ) {
      this.props.updateEmail(this.props.email.id, this.props.actionId, this.state.action);
    } else if (
      this.props.actionType === ACTION_TYPE.task &&
      this.props.editMode === EDIT_MODE.update
    ) {
      this.props.updateTask(this.props.email.id, this.props.actionId, this.state.action);
    }
    this.setState({ action: {} });
  };

  // updatedAction is the PropType shape actionShape and represents a single action a candidate takes on an email
  editAction = updatedAction => {
    this.setState({ action: updatedAction });
  };

  showCancelConfirmationDialog = () => {
    this.setState({ showCancelConfirmationDialog: true });
  };

  closeCancelConfirmationDialog = () => {
    this.setState({ showCancelConfirmationDialog: false });
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    return (
      <div>
        <Modal show={showDialog} onHide={this.showCancelConfirmationDialog} backdrop={"static"}>
          <div>
            <Modal.Header style={styles.modalHeader}>
              {
                <div style={styles.fullWidth}>
                  {actionType === ACTION_TYPE.email && (
                    <div style={styles.fullWidth}>
                      <i style={styles.icon} className="fas fa-envelope" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addEmail}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editEmail}
                      </h3>
                      <button
                        onClick={this.showCancelConfirmationDialog}
                        style={styles.closeButton}
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  )}
                  {actionType === ACTION_TYPE.task && (
                    <div style={styles.fullWidth}>
                      <i style={styles.icon} className="fas fa-tasks" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addTask}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editTask}
                      </h3>
                      <button
                        onClick={this.showCancelConfirmationDialog}
                        style={styles.closeButton}
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  )}
                </div>
              }
            </Modal.Header>
            <Modal.Body style={styles.modalBody}>
              <div style={styles.container}>
                <h4>{LOCALIZE.emibTest.inboxPage.emailCommons.yourResponse}</h4>
                {actionType === ACTION_TYPE.email && (
                  <EditEmail
                    onChange={this.editAction}
                    action={editMode === EDIT_MODE.update ? this.props.action : null}
                  />
                )}
                {actionType === ACTION_TYPE.task && (
                  <EditTask
                    emailNumber={this.props.email.id}
                    emailSubject={this.props.email.subject}
                    onChange={this.editAction}
                    action={editMode === EDIT_MODE.update ? this.props.action : null}
                  />
                )}
                <h4>{LOCALIZE.emibTest.inboxPage.emailCommons.originalEmail}</h4>
                <div style={styles.originalEmail}>
                  <EmailContent email={this.props.email} />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div>
                  <button
                    id="unit-test-email-response-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSave}
                    disabled={!this.props.showDialog}
                  >
                    {LOCALIZE.emibTest.inboxPage.editActionDialog.save}
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
        {this.state.showCancelConfirmationDialog && (
          <PopupBox
            show={this.state.showCancelConfirmationDialog}
            handleClose={this.closeCancelConfirmationDialog}
            title={LOCALIZE.emibTest.inboxPage.cancelResponseConfirmation.title}
            description={
              <div>
                <div>
                  <SystemMessage
                    messageType={MESSAGE_TYPE.error}
                    title={
                      LOCALIZE.emibTest.inboxPage.cancelResponseConfirmation.systemMessageTitle
                    }
                    message={
                      LOCALIZE.emibTest.inboxPage.cancelResponseConfirmation
                        .systemMessageDescription
                    }
                  />
                </div>
                <div>{LOCALIZE.emibTest.inboxPage.cancelResponseConfirmation.description}</div>
              </div>
            }
            leftButtonType={BUTTON_TYPE.danger}
            leftButtonTitle={LOCALIZE.commons.cancelResponse}
            leftButtonAction={handleClose}
            rightButtonType={BUTTON_TYPE.primary}
            rightButtonTitle={LOCALIZE.commons.returnToResponse}
          />
        )}
      </div>
    );
  }
}

export { EditActionDialog as UnconnectedEditActionDialog };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEmail,
      addTask,
      updateEmail,
      updateTask,
      readEmail
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(EditActionDialog);
