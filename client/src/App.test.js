import React from "react";
import { shallow } from "enzyme";
import App from "./App";
let wrapped = shallow(<App />);
describe("App", () => {
  // it("should render the semantic layout", () => {
  //   expect(wrapped).toMatchSnapshot();
  // });

  it("should render the semantic layout", () => {
    expect(wrapped.find("header")).toBeTruthy();
    expect(wrapped.find("main")).toBeTruthy();
    expect(wrapped.find("footer")).toBeTruthy();
  });
});
