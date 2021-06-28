import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Products from "./Products";
import fetchMock from "fetch-mock";
// import { ProductCard } from "components/Atoms/ProductCard/ProductCard";
jest.mock("../../Utils/Head.jsx", () => ({
  Head: "div",
}));

const mockAddToCart = jest.fn();
jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({
      addToCart: mockAddToCart,
    }),
  };
});
const categories = [
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

const mainProducts = [
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
  },
  {
    name: "Fresho Pomegrante Peeled, 500 gm ",
    imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
    description:
      "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
    price: 88,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-pomegranate-500",
    id: "5b6c6b7001a7c38429530885",
  },
];

fetchMock.get("end:/api/categories", categories);
fetchMock.get("end:/api/products", mainProducts);
let wrapped;
act(() => {
  wrapped = mount(<Products />);
});
describe("Products", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
