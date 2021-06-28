import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
// import { createMemoryHistory } from "history";
// import { NavLink } from "react-router-dom";

const wrapped = shallow(<Header />);
// const history = createMemoryHistory();
describe("Header", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  // it("should naviagate to product page", () => {
  //   wrapped.find(NavLink).at(2).simulate("click", {});
  //   expect(history.location.pathname).toBe("/products");
  // });
});
