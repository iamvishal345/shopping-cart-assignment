import React from "react";
import { shallow } from "enzyme";
import { ProductCard } from "./ProductCard";

const product = {
  name: "Fresho Kiwi - Green, 3 pcs",
  imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
  description:
    "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
  price: 87,
  stock: 50,
  category: "5b6899953d1a866534f516e2",
  sku: "fnw-kiwi-3",
  id: "5b6c6a7f01a7c38429530883",
};
const handlePrimaryAction = jest.fn();
const wrapped = shallow(
  <ProductCard product={product} handlePrimaryAction={handlePrimaryAction} />
);
describe("ProductCard", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("should execute callback on click of buy now button", () => {
    wrapped.find(".btn").simulate("click", {});
    expect(handlePrimaryAction).toBeCalledWith(product);
  });
});
