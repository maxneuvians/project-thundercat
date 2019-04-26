import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { styleConstants } from "./styleConstants.js";
import Email from "./Email";
import ActionViewEmail from "./ActionViewEmail";
import ActionViewTask from "./ActionViewTask";
import { ACTION_TYPE, EMAIL_TYPE } from "./constants";

class TestExamples extends Component {
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
          <h2>{LOCALIZE.emibTest.howToPage.testExamples.title}</h2>
          <div>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testExamples.para1}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part1Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponentNoPadding}>
              <Email email={exampleEmail} disabled={true} />
            </div>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testExamples.part1Description}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part2Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponent}>
              <ActionViewEmail
                action={exampleEmailResponse}
                actionId={1}
                email={exampleEmail}
                disabled={true}
              />
            </div>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part3Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponent}>
              <ActionViewTask
                action={exampleTaskResponse}
                actionId={1}
                email={exampleEmail}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TestExamples;
