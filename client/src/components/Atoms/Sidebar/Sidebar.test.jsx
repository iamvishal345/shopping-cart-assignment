import React from "react";
import { shallow } from "enzyme";
import { Sidebar } from "./Sidebar";

const menuList = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "/static/images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Bakery Cakes and Dairy",
    key: "bakery-cakes-dairy",
    description:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    enabled: true,
    order: 2,
    imageUrl: "/static/images/category/bakery.png",
    id: "5b6899123d1a866534f516de",
  },
  {
    name: "Beauty and Hygiene",
    key: "beauty-hygiene",
    description:
      "Buy beauty and personal care products online in India at best prices.",
    enabled: true,
    order: 4,
    imageUrl: "/static/images/category/beauty.png",
    id: "5b68994e3d1a866534f516df",
  },
];
const selectedCallback = jest.fn();
const wrapped = shallow(
  <Sidebar menuList={menuList} selectedCallback={selectedCallback} />
);
describe("Sidebar", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should render menuList + 1(All) no of menus", () => {
    expect(wrapped.find(".menu-item").length).toEqual(menuList.length + 1);
  });

  it("should select menu from sidebar on click of menu item and set its class as active", () => {
    //0th index is All categories
    wrapped.find(".menu-item").at(1).find("button").simulate("click", {});
    expect(wrapped.find("li").at(1).find("button").prop("className")).toEqual(
      "active"
    );
    expect(selectedCallback).toBeCalledWith(menuList[0].id);

    //for All
    wrapped.find(".menu-item").at(0).find("button").simulate("click", {});
    expect(wrapped.find("li").at(0).find("button").prop("className")).toEqual(
      "active"
    );
    expect(selectedCallback).toBeCalledWith("all");
  });
  it("should test mobile menu", () => {
    wrapped.find(".mobile-dropdown").find("button").simulate("click", {});
    expect(wrapped.find("ul").prop("className")).toEqual(
      "menu-list mobile-active"
    );
    expect(
      wrapped.find(".mobile-dropdown").find("button").prop("aria-label")
    ).toEqual("Hide Dropdown");
  });
});
