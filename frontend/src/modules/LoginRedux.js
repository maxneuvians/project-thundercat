// Action Types
export const SET_LOGIN_STATE = "localize/SET_LOGIN_STATE";

// Action Creators
const setLoginState = loginState => ({ type: SET_LANGUAGE, loginState });

// Initial State
const initialState = {
  loginState: "en"
};

// Reducer
const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        loginState: action.loginState
      };

    default:
      return state;
  }
};

export default login;
export { setLoginState, initialState };
