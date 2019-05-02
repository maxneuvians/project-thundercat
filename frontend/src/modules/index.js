import { combineReducers } from "redux";
import localize from "./LocalizeRedux";
import login from "./LoginRedux";
import testStatus from "./TestStatusRedux";
import emibInbox from "./EmibInboxRedux";

export default combineReducers({ localize, login, emibInbox, testStatus });
