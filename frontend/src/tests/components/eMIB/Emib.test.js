import React from "react";
import { mount, shallow } from "enzyme";
import { UnconnectedEmib as Emib, PAGES } from "../../../components/eMIB/Emib";
import EmibTabs from "../../../components/eMIB/EmibTabs";
import Confirmation from "../../../components/eMIB/Confirmation";
import LOCALIZE from "../../../text_resources";
import Background from "../../../components/eMIB/Background";

it("renders pre-test page", () => {
  const wrapper = mount(<Emib activateTest={() => {}} deactivateTest={() => {}} />);
  const emibTitle = <h1 className="green-divider">{LOCALIZE.emibTest.homePage.testTitle}</h1>;
  expect(wrapper.contains(emibTitle)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.preTest);
});

it("renders pre-test page when state changed", () => {
  const wrapper = mount(<Emib activateTest={() => {}} deactivateTest={() => {}} />);
  wrapper.setState({ curPage: PAGES.preTest });
  const emibTitle = <h1 className="green-divider">{LOCALIZE.emibTest.homePage.testTitle}</h1>;
  expect(wrapper.contains(emibTitle)).toEqual(true);
});

it("renders tabs", () => {
  const wrapper = shallow(<Emib activateTest={() => {}} deactivateTest={() => {}} />);
  wrapper.setState({ curPage: PAGES.emibTabs });
  expect(wrapper.find(EmibTabs).length).toEqual(1);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib activateTest={() => {}} deactivateTest={() => {}} />);
  wrapper.setState({ curPage: PAGES.confirm });
  const confirmationComponent = <Confirmation />;
  expect(wrapper.contains(confirmationComponent)).toEqual(true);
});
