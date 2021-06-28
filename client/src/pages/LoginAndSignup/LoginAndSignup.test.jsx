import React from "react";
import { mount, shallow } from "enzyme";
import LoginAndSignup from "./LoginAndSignup";
import { REGISTER, SIGNIN } from "constants/constants";
import { InputWrapper } from "components/Atoms/InputWrapper/InputWrapper";

const mockHistory = jest.fn();
jest.mock("react-router-dom", () => {
  const ActualReact = jest.requireActual("react-router-dom");
  return {
    ...ActualReact,
    useHistory: () => ({ push: mockHistory }),
  };
});

describe("Login and Signup", () => {
  it("should match the snapshot with login page", () => {
    const wrapped = mount(<LoginAndSignup page={REGISTER} />);
    expect(wrapped).toMatchSnapshot();
  });
  it("should match the snapshot with signIn Page", () => {
    const wrapped = mount(<LoginAndSignup page={SIGNIN} />);
    expect(wrapped).toMatchSnapshot();
  });

  it("should handle InputWrapper value change callback", () => {
    const wrapped = shallow(<LoginAndSignup page={SIGNIN} />);
    wrapped.find(InputWrapper).at(0).prop("setValue")("testValue");
    expect(wrapped.find(InputWrapper).at(0).prop("value")).toEqual("testValue");
  });

  it("should submit Invalid form and show error messages", () => {
    const wrapped = shallow(<LoginAndSignup page={SIGNIN} />);
    wrapped.find(InputWrapper).at(0).prop("setValue")("");
    wrapped.find(InputWrapper).at(1).prop("setValue")("");
    wrapped.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(wrapped.find("small").at(0).text()).toEqual("Invalid Value");
    expect(wrapped.find("small").at(1).text()).toEqual("Invalid Value");
  });

  it("should submit valid form and redirect to home page", () => {
    const wrapped = shallow(<LoginAndSignup page={SIGNIN} />);
    wrapped.find(InputWrapper).at(0).prop("setValue")("abc@example.com");
    wrapped.find(InputWrapper).at(1).prop("setValue")("1234@1234");
    wrapped.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(mockHistory).toBeCalledWith("/");
  });
});
