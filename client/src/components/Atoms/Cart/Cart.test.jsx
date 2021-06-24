import React from "react";
import { shallow } from "enzyme";
import { Cart } from "./Cart";

const mockUpdateQuantity = jest.fn();
const products = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
    quantity: 3,
  },
  {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
    quantity: 1,
  },
];
jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({
      products: products,
      updateQuantity: mockUpdateQuantity,
    }),
  };
});
describe("Cart", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<Cart />);
  });

  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should show number of items as length of products array", () => {
    expect(wrapped.find("#no-of-items").text()).toEqual("2 items");
  });

  it("should show cart over on click of cart button", () => {
    wrapped.find(".cart-icon").simulate("click", {});
    expect(wrapped.find("#no-of-items").text()).toEqual("2 items");
  });
});
