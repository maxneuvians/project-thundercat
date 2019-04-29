import React from "react";
import { mount } from "enzyme";
import TabNavigation from "../../../components/commons/TabNavigation";
import Tab from "../../../components/commons/Tab";

describe("renders specific number of tabs", () => {
  it("renders 2 tabs", () => {
    const TABS = [{ id: 0, tabName: "test1" }, { id: 1, tabName: "test2" }];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
  });

  it("renders 3 tabs", () => {
    const TABS = [
      { id: 0, tabName: "test1" },
      { id: 1, tabName: "test2" },
      { id: 2, tabName: "test3" }
    ];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });

  it("renders 4 tabs", () => {
    const TABS = [
      { id: 0, tabName: "test1" },
      { id: 1, tabName: "test2" },
      { id: 2, tabName: "test3" },
      { id: 3, tabName: "test4" }
    ];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} />;
    const tab4 = <Tab tabName={"test4"} selected={false} disabled={false} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab4)).toEqual(true);
  });
});

describe("changing tabs to tab x", () => {
  it("changes tabs to tab 1", () => {
    const TABS = [
      { id: 0, tabName: "test1" },
      { id: 1, tabName: "test2" },
      { id: 2, tabName: "test3" }
    ];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    wrapper
      .find(".side-navigation-button")
      .first()
      .simulate("click");
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={false} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={false} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });

  it("changes tabs to tab 2", () => {
    const TABS = [
      { id: 0, tabName: "test1" },
      { id: 1, tabName: "test2" },
      { id: 2, tabName: "test3" }
    ];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    wrapper
      .find(".side-navigation-button")
      .last()
      .simulate("click");
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={false} />;
    const tab3 = <Tab tabName={"test3"} selected={true} disabled={false} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });
});
