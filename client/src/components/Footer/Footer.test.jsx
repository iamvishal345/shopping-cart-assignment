import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";

const wrapped = shallow(<Footer />);
describe("Footer", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should show 2011-current year in footer content", () => {
    const footerContent = `Copyright © 2011-${new Date().getFullYear()} Sabka Bazaar Grocery Supplies Pvt Ltd`;
    expect(wrapped.find(".main-footer").text()).toBe(footerContent);
  });
});
