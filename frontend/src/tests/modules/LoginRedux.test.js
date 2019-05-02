import login, { setLoginState, initialState } from "../../modules/LoginRedux";

describe("setLoginState action", () => {
  it("should update loggedIn state", () => {
    const action1 = setLoginState(true);
    expect(login(initialState, action1)).toEqual({ loggedIn: true });
    const action2 = setLoginState(false);
    expect(login(initialState, action2)).toEqual({ loggedIn: false });
  });
});
