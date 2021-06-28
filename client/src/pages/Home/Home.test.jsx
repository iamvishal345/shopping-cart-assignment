import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Home from "./Home";
import fetchMock from "fetch-mock";
jest.mock("../../Utils/Head.jsx", () => ({
  Head: "div",
}));
jest.mock("../../components/Atoms/Carousel/Carousel.jsx", () => ({
  Carousel: "div",
}));
jest.mock("../../components/Atoms/Card/Card.jsx", () => ({
  Card: "div",
}));

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

const banners = [
  {
    bannerImageUrl: "/static/images/offers/offer1.jpg",
    bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
    isActive: true,
    order: 1,
    id: "5b6c38156cb7d770b7010ccc",
  },
  {
    bannerImageUrl: "/static/images/offers/offer2.jpg",
    bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
    isActive: true,
    order: 2,
    id: "5b6c38336cb7d770b7010ccd",
  },
  {
    bannerImageUrl: "/static/images/offers/offer3.jpg",
    bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
    isActive: true,
    order: 3,
    id: "5b6c38456cb7d770b7010cce",
  },
  {
    bannerImageUrl: "/static/images/offers/offer4.jpg",
    bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
    isActive: true,
    order: 4,
    id: "5b6c38576cb7d770b7010ccf",
  },
  {
    bannerImageUrl: "/static/images/offers/offer5.jpg",
    bannerImageAlt: "Independence Day Deal - Rs70 off on tea",
    isActive: true,
    order: 5,
    id: "5b6c386b6cb7d770b7010cd0",
  },
];

describe("Home", () => {
  it("should match the snapshot", () => {
    fetchMock.get("end:/api/banners", banners);
    fetchMock.get("end:/api/categories", categories);
    let wrapped;
    act(() => {
      wrapped = mount(<Home />);
    });
    expect(wrapped).toMatchSnapshot();
  });
});
