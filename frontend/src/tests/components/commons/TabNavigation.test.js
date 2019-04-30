import React from "react";
import { mount } from "enzyme";
import TabNavigation, { isTabIdDisabled } from "../../../components/commons/TabNavigation";
import Tab from "../../../components/commons/Tab";

describe("renders specific number of tabs", () => {
  it("renders 2 tabs", () => {
    const TABS = [{ id: 0, tabName: "test1" }, { id: 1, tabName: "test2" }];
    const wrapper = mount(
      <TabNavigation tabSpecs={TABS} currentTab={1} menuName="testing" disabledTabsArray={[]} />
    );
    expect(wrapper.find(Tab).length).toEqual(2);
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
    expect(wrapper.find(Tab).length).toEqual(3);
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
    expect(wrapper.find(Tab).length).toEqual(4);
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
    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().selected
    ).toEqual(true);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().selected
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().selected
    ).toEqual(false);
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
    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().selected
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().selected
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().selected
    ).toEqual(true);
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

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(false);

    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().disabled
    ).toEqual(false);
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

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(false);

    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().disabled
    ).toEqual(false);
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

    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(false);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(true);

    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().disabled
    ).toEqual(true);
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
    expect(isTabIdDisabled(disabledTabsArray, 0)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 1)).toEqual(true);
    expect(isTabIdDisabled(disabledTabsArray, 2)).toEqual(true);

    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find(Tab)
        .at(2)
        .props().disabled
    ).toEqual(true);
  });
});
