import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TextareaAutosize from "react-textarea-autosize";
import "../../css/emib-tabs.css";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../eMIB/constants";

const NOTEPAD_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`;
const SECTION_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT + 53}px)`;

const styles = {
  windowPadding: {
    paddingTop: 38,
    maxWidth: 300
  },
  h4: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#00565e",
    padding: "0 0 8px 12px",
    borderBottom: "1.5px solid #88C800"
  },
  hideNotepadBtn: {
    float: "right",
    margin: "8px 12px 0 0",
    padding: "0 8px 0 8px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer"
  },
  hideNotepadBtnIcon: {
    paddingTop: 12,
    cursor: "pointer"
  },
  hideNotepadBtnZone: {
    float: "right"
  },
  content: {
    backgroundColor: "white",
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    width: "100%",
    height: NOTEPAD_HEIGHT
  },
  notepadSection: {
    overflow: "auto",
    height: SECTION_HEIGHT
  },
  textArea: {
    padding: "0 12px 6px 12px",
    width: "100%",
    resize: "none",
    border: "none"
  },
  openNotepadBtnLabel: {
    position: "absolute",
    paddingTop: 40,
    width: 60,
    fontSize: "13px",
    color: "white",
    cursor: "pointer"
  },
  openNotepadBtn: {
    width: 60,
    border: "none",
    backgroundColor: "#00565e",
    height: NOTEPAD_HEIGHT,
    cursor: "pointer",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  openNotepadBtnIcon: {
    position: "absolute",
    padding: "16px 0 0 22px",
    cursor: "pointer",
    color: "white"
  },
  openNotepadBtnHeight: {
    height: NOTEPAD_HEIGHT
  }
};

class Notepad extends Component {
  state = {
    notepadHidden: false,
    notepadContent: ""
  };

  handleHide = () => {
    this.setState({ notepadHidden: true });
  };

  handleOpen = () => {
    this.setState({ notepadHidden: false });
  };

  handleNotepadContent = event => {
    this.setState({ notepadContent: event.target.value });
  };

  render() {
    const { notepadHidden } = this.state;
    return (
      <div style={styles.windowPadding}>
        {!notepadHidden && (
          <div style={styles.content}>
            <div style={styles.hideNotepadBtnZone}>
              <span
                onClick={this.handleHide}
                style={styles.hideNotepadBtnIcon}
                className="fas fa-minus-circle"
              />
              <button onClick={this.handleHide} style={styles.hideNotepadBtn}>
                {LOCALIZE.commons.notepad.hideButton}
              </button>
            </div>
            <div>
              <h4 style={styles.h4}>{LOCALIZE.commons.notepad.title.toUpperCase()}</h4>
            </div>
            <div style={styles.notepadSection}>
              <form>
                <fieldset>
                  <label htmlFor="text-area-zone" className="invisible position-absolute">
                    {LOCALIZE.commons.notepad.title}
                  </label>
                  <TextareaAutosize
                    id="text-area-zone"
                    maxLength="3000"
                    className="text-area"
                    style={styles.textArea}
                    cols="45"
                    minRows={16}
                    placeholder={LOCALIZE.commons.notepad.placeholder}
                    value={this.state.notepadContent}
                    onChange={this.handleNotepadContent}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        )}
        {notepadHidden && (
          <div style={styles.openNotepadBtnHeight}>
            <span
              onClick={this.handleOpen}
              style={styles.openNotepadBtnIcon}
              className="fas fa-external-link-alt"
            />
            <label onClick={this.handleOpen} style={styles.openNotepadBtnLabel}>
              {LOCALIZE.commons.notepad.openButton.toUpperCase()}
            </label>
            <button
              className="btn btn-primary"
              onClick={this.handleOpen}
              style={styles.openNotepadBtn}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Notepad;
