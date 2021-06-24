import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const item = {
  name: "testItem",
  imageUrl: "/static/images/logo.png",
  description: "Test Item Description",
  key: "test-item",
};

let wrapped = shallow(<Card item={item} />);

describe("Card", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should render the card with item details", () => {
    expect(wrapped.find("h3").text()).toEqual(item.name);
    expect(wrapped.find("p").text()).toEqual(item.description);
    expect(wrapped.find(Link).text()).toEqual(`Explore ${item.key}`);
  });
});
