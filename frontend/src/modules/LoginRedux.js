// Action Types
export const SET_LOGIN_STATE = "localize/SET_LOGIN_STATE";

// Action Creators
const setLoginState = loggedIn => ({ type: SET_LOGIN_STATE, loggedIn });

// Initial State
const initialState = {
  loggedIn: false
};

// Reducer
const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        loggedIn: action.loggedIn
      };

    default:
      return state;
  }
};

export default login;
export { setLoginState, initialState };
