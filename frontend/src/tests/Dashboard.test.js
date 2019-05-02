import React from "react";
import { shallow } from "enzyme";
import { UnconnectedDashboard } from "../Dashboard";
import LOCALIZE from "../text_resources";

describe("renders title and description if logged out", () => {
  it("renders title", () => {
    const wrapper = shallow(<UnconnectedDashboard />);
    const title = <h1>{LOCALIZE.dashboard.title}</h1>;
    expect(wrapper.containsMatchingElement(title)).toEqual(true);
  });

  it("renders description if logged out", () => {
    const wrapper = shallow(<UnconnectedDashboard />);
    const description = <p>{LOCALIZE.dashboard.descriptionIfLoggedOut}</p>;
    expect(wrapper.contains(description)).toEqual(true);
  });
});
