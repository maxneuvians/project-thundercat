/* verify if the email form is empty by checking if all the fields are empty
returns true if all the fields are empty and false if at least one of the fields contains data */
function isEmailFormEmpty(emailType, emailTo, emailCc, emailResponse, reasonsForActionContent) {
  let isEmpty = false;

  if (
    emailType === "" &&
    emailTo === "" &&
    emailCc === "" &&
    emailResponse === "" &&
    reasonsForActionContent === ""
  ) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}

/* verify if the task form is empty by checking if all the fields are empty
returns true if all the fields are empty and false if at least one of the fields contains data */
function isTaskFormEmpty(taskContent, reasonsForActionContent) {
  let isEmpty = false;

  if (taskContent === "" && reasonsForActionContent === "") {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}

/* verify if the task form has been edited by comparing the initial field values (getting these values
from the action prop) with the current field values (getting these values from the action state)
returns false if all initial fields values are the same as the current ones and true if at least
one of the initial field values is diferrent as the current ones */
function isTaskFormEdited(
  initialTaskContent,
  taskContent,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;

  if (
    initialTaskContent !== taskContent ||
    initialReasonsForActionContent !== reasonsForActionContent
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

/* verify if the email form has been edited by comparing the initial field values (getting these values
from the action prop) with the current field values (getting these values from the action state)
returns false if all initial fields values are the same as the current ones and true if at least
one of the initial field values is diferrent as the current ones */
function isEmailFormEdited(
  initialEmailType,
  emailType,
  initialEmailTo,
  emailTo,
  initialEmailCc,
  emailCc,
  initialEmailResponse,
  emailResponse,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;

  let initialEmailToArray = typeof initialEmailTo === "undefined" ? [] : initialEmailTo;
  let emailToArray = typeof emailTo === "undefined" ? [] : emailTo;
  let initialEmailCcArray = typeof initialEmailCc === "undefined" ? [] : initialEmailCc;
  let emailCcArray = typeof emailCc === "undefined" ? [] : emailCc;

  // sorting the arrays before the comparison below only if all To and Cc fields (initial and current) are defined
  if (initialEmailTo && emailTo && initialEmailCc && emailCc) {
    initialEmailToArray.sort();
    emailToArray.sort();
    initialEmailCcArray.sort();
    emailCcArray.sort();
  }

  if (
    initialEmailType !== emailType ||
    initialEmailToArray.toString() !== emailToArray.toString() ||
    initialEmailCcArray.toString() !== emailCcArray.toString() ||
    initialEmailResponse !== emailResponse ||
    initialReasonsForActionContent !== reasonsForActionContent
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

export default isEmailFormEmpty;
export { isTaskFormEmpty, isTaskFormEdited, isEmailFormEdited };
