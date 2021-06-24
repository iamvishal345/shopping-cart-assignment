import React from "react";
import { shallow } from "enzyme";
import { Carousel } from "./Carousel";

const items = [
  {
    bannerImageUrl: "/static/images/offers/offer1.jpg",
    bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
    order: 1,
    id: "5b6c38336cb7d770b7010ccd",
  },
  {
    bannerImageUrl: "/static/images/offers/offer2.jpg",
    bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
    order: 2,
    id: "5b6c38156cb7d770b7010ccc",
  },
  {
    bannerImageUrl: "/static/images/offers/offer3.jpg",
    bannerImageAlt: "Independence Day Deal - Rs99 off on Rice",
    order: 3,
    id: "5b6c38156cb7d770b7010cce",
  },
];

describe("carousel", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<Carousel items={items} />);
  });
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should render the carousel with image of first item", () => {
    expect(wrapped.find("img").prop("alt")).toEqual(items[0].bannerImageAlt);
    expect(wrapped.find("img").prop("src")).toEqual(items[0].bannerImageUrl);
    expect(wrapped.find(".dot").at(0).prop("className")).toEqual("dot active");
  });
  it("should show next item on click of next button", () => {
    wrapped.find("#next-button").simulate("click", {});
    expect(wrapped.find("img").prop("alt")).toEqual(items[1].bannerImageAlt);
    expect(wrapped.find("img").prop("src")).toEqual(items[1].bannerImageUrl);
    expect(wrapped.find(".dot").at(1).prop("className")).toEqual("dot active");
  });
  it("should show prev item on click of prev button", () => {
    wrapped.find("#prev-button").simulate("click", {}); //From the first item it will go to last
    expect(wrapped.find("img").prop("alt")).toEqual(items[2].bannerImageAlt);
    expect(wrapped.find("img").prop("src")).toEqual(items[2].bannerImageUrl);
    expect(wrapped.find(".dot").at(2).prop("className")).toEqual("dot active");
    wrapped.find("#next-button").simulate("click", {}); //From the last on click of next it goes to first item
    expect(wrapped.find("img").prop("alt")).toEqual(items[0].bannerImageAlt);
    expect(wrapped.find("img").prop("src")).toEqual(items[0].bannerImageUrl);
    expect(wrapped.find(".dot").at(0).prop("className")).toEqual("dot active");
  });
});
