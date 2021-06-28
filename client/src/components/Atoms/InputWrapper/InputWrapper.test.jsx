import React from "react";
import { shallow } from "enzyme";
import { InputWrapper } from "./InputWrapper";

const props = {
  value: "test",
  setValue: jest.fn(),
  name: "mockName",
  id: "mockId",
  label: "mockLabel",
  type: "text",
};

let wrapped = shallow(<InputWrapper {...props} />);

describe("InputWrapper", () => {
  it("should match the snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should call callback on  change input value", () => {
    wrapped
      .find("#mockId")
      .simulate("change", { target: { value: "modifiedValue" } });
    expect(props.setValue).toBeCalledWith("modifiedValue");
  });
});
