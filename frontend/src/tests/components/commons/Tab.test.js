import React from "react";
import { shallow, mount } from "enzyme";
import Tab, { styles } from "../../../components/commons/Tab";

describe("renders selected and unselected tabs", () => {
  it("renders selected tab", () => {
    const wrapper = shallow(<Tab tabName="Tab1" selected={true} />);
    const initialMessage = (
      <span>
        <li style={styles.li}>
          <button style={{ ...styles.button, ...styles.active }}>Tab1</button>
        </li>
      </span>
    );
    expect(wrapper.containsMatchingElement(initialMessage)).toEqual(true);
  });

  it("renders unselected tab", () => {
    const wrapper = shallow(<Tab tabName="Tab2" selected={false} />);
    const initialMessage = (
      <span>
        <li style={styles.li}>
          <button style={styles.button}>Tab2</button>
        </li>
      </span>
    );
    expect(wrapper.containsMatchingElement(initialMessage)).toEqual(true);
  });
});

describe("check that the disabled prop works as expected", () => {
  it("tab is not disabled if flag is not present", () => {
    const wrapper = mount(<Tab tabName="Tab1" selected={true} />);
    expect(wrapper.find("#unit-test-selected-tab-button").exists()).toEqual(true);
    expect(wrapper.find("#unit-test-unselected-tab-button").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-disabled-tab-button").exists()).toEqual(false);
  });

  it("tab is not disabled if flag is set to false", () => {
    const wrapper = mount(<Tab tabName="Tab1" selected={true} disabled={false} />);
    expect(wrapper.find("#unit-test-selected-tab-button").exists()).toEqual(true);
    expect(wrapper.find("#unit-test-unselected-tab-button").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-disabled-tab-button").exists()).toEqual(false);
  });

  it("tab is disabled if flag is set to true", () => {
    const wrapper = mount(<Tab tabName="Tab1" selected={true} disabled={true} />);
    expect(wrapper.find("#unit-test-selected-tab-button").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-unselected-tab-button").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-disabled-tab-button").exists()).toEqual(true);
  });
});
