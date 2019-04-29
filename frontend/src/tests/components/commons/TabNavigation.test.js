import React from "react";
import { mount } from "enzyme";
import TabNavigation, { isTabIdDisabled } from "../../../components/commons/TabNavigation";
import Tab from "../../../components/commons/Tab";

const myFunction = () => {};

describe("renders specific number of tabs", () => {
  it("renders 2 tabs", () => {
    const TABS = [{ id: 0, tabName: "test1" }, { id: 1, tabName: "test2" }];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} onClick={myFunction()} />;
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
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} onClick={myFunction()} />;
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
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab4 = <Tab tabName={"test4"} selected={false} disabled={false} onClick={myFunction()} />;
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
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} onClick={myFunction()} />;
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
    const tab1 = <Tab tabName={"test1"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={true} disabled={false} onClick={myFunction()} />;
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });
});

describe("renders the right enabled / disabled tabs", () => {
  const TABS = [
    { id: 0, tabName: "test1" },
    { id: 1, tabName: "test2" },
    { id: 2, tabName: "test3" }
  ];

  it("all tabs are enabled", () => {
    // disabling not tab ==> all tabs are enabled
    const disabledTabsArray = [];
    const wrapper = mount(
      <TabNavigation
        tabSpecs={TABS}
        currentTab={0}
        menuName="testing"
        disabledTabsArray={disabledTabsArray}
      />
    );
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={false} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} onClick={myFunction()} />;

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(false);
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });

  it("tab #1 and tab #3 are enabled and tab #2 is disabled", () => {
    // disabling tab #2
    const disabledTabsArray = [1];
    const wrapper = mount(
      <TabNavigation
        tabSpecs={TABS}
        currentTab={0}
        menuName="testing"
        disabledTabsArray={disabledTabsArray}
      />
    );
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={true} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={false} onClick={myFunction()} />;

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(false);
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });

  it("tab #1 is enabled and tab #2 and tab #3 are disabled", () => {
    // disabling tab #2 and tab #3
    const disabledTabsArray = [1, 2];
    const wrapper = mount(
      <TabNavigation
        tabSpecs={TABS}
        currentTab={0}
        menuName="testing"
        disabledTabsArray={disabledTabsArray}
      />
    );
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={false} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={true} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={true} onClick={myFunction()} />;

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });

  it("all tabs are disabled", () => {
    // disabling all tabs
    const disabledTabsArray = [0, 1, 2];
    const wrapper = mount(
      <TabNavigation
        tabSpecs={TABS}
        currentTab={0}
        menuName="testing"
        disabledTabsArray={disabledTabsArray}
      />
    );
    const tab1 = <Tab tabName={"test1"} selected={true} disabled={true} onClick={myFunction()} />;
    const tab2 = <Tab tabName={"test2"} selected={false} disabled={true} onClick={myFunction()} />;
    const tab3 = <Tab tabName={"test3"} selected={false} disabled={true} onClick={myFunction()} />;

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab1)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab2)).toEqual(true);
    expect(wrapper.containsMatchingElement(tab3)).toEqual(true);
  });
});
