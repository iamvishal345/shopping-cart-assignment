import React from "react";
import { shallow } from "enzyme";
import { Logo } from "./Logo";

let wrapped = shallow(<Logo />);

describe("Logo", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
