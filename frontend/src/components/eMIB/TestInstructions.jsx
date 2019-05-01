import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import Email from "./Email";
import ActionViewEmail from "./ActionViewEmail";
import ActionViewTask from "./ActionViewTask";
import { styleConstants } from "./styleConstants.js";
import { ACTION_TYPE, EMAIL_TYPE } from "./constants";

class TestInstructions extends Component {
  render() {
    const exampleEmail = {
      id: 0,
      to: LOCALIZE.emibTest.howToPage.testExamples.exampleEmail.to,
      from: LOCALIZE.emibTest.howToPage.testExamples.exampleEmail.from,
      subject: LOCALIZE.emibTest.howToPage.testExamples.exampleEmail.subject,
      date: LOCALIZE.emibTest.howToPage.testExamples.exampleEmail.date,
      body: LOCALIZE.emibTest.howToPage.testExamples.exampleEmail.body
    };

    const exampleEmailResponse = {
      actionType: ACTION_TYPE.email,
      emailType: EMAIL_TYPE.reply,
      emailTo: [8], // Geneviève Bédard in the address book
      emailCc: [],
      emailBody: LOCALIZE.emibTest.howToPage.testExamples.exampleEmailResponse.emailBody,
      reasonsForAction:
        LOCALIZE.emibTest.howToPage.testExamples.exampleEmailResponse.reasonsForAction
    };

    const exampleTaskResponse = {
      actionType: ACTION_TYPE.task,
      task: LOCALIZE.emibTest.howToPage.testExamples.exampleTaskResponse.task,
      reasonsForAction:
        LOCALIZE.emibTest.howToPage.testExamples.exampleTaskResponse.reasonsForAction
    };

    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.testInstructions.title}</h2>
          <div>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.para1}
            </p>
          </div>
          <div>
            <h3 style={styleConstants.instuctions.h3}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.title}
            </h3>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.description}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              ===TODO: MOVE=== Example of an email you have recieved:
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponentNoPadding}>
              <Email email={exampleEmail} disabled={true} />
            </div>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para1}
            </p>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para2}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.para1}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para1}
            </p>
            <ol>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet3}</li>
            </ol>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para2}
            </p>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para3}
            </p>
          </div>
          <div>
            <h3 style={styleConstants.instuctions.h3}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.title}
            </h3>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestInstructions;
