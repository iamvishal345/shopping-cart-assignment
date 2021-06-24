import React from "react";
import "./style.scss";

export const InputWrapper = ({ value, setValue, name, id, label, type }) => (
  <div className="form-input">
    <input
      type={type || "text"}
      name={name}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value.trimStart())}
    />
    <label
      className={`form-input-label ${value && "input-value"}`}
      htmlFor={id}
    >
      {label}
    </label>
  </div>
);

// InputField.propTypes = {
//   value: PropTypes.string.isRequired,
//   setValue: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   ariaLabel: PropTypes.string,
// };
