import React, { useEffect, useState } from "react";
import "./styles.scss";
import { InputWrapper } from "components/Atoms/InputWrapper/InputWrapper";
import { Head } from "Utils/Head";
import { useHistory } from "react-router-dom";

const LoginAndSignup = ({ page }) => {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [isValid, setIsValid] = useState({});
  useEffect(() => {
    setForm(
      page.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
    setIsValid(
      page.fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );
  }, [page]);
  const handleValueChange = (value, name) => {
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      history.push("/");
    }
  };

  const validateForm = () => {
    let tempIsValid = { ...isValid };
    Object.keys(form).forEach((key) => {
      if (form[key] === "") {
        tempIsValid[key] = false;
      } else {
        tempIsValid[key] = validateValue(form[key], key);
      }
    });
    setIsValid(tempIsValid);
    return !Object.keys(tempIsValid).find((key) => !tempIsValid[key]);
  };

  const validateValue = (value, name) => {
    if (name === "email") {
      return /(.+)@(.+){2,}\.(.+){2,}/.test(value);
    }
    if (name === "confirmPassword") {
      return value === form["password"];
    }
    return true;
  };

  return (
    <React.Fragment>
      <Head
        title={`Sabka Bazaar - ${page.header}`}
        description={page.subHeader}
      />
      <div className="login-signup-container">
        <div className="details-section">
          <h2>{page.header}</h2>
          <p>{page.subHeader}</p>
        </div>
        <form className="form-section" onSubmit={handleSubmit}>
          {page.fields.map((field) => (
            <React.Fragment key={field.id}>
              <InputWrapper
                setValue={(value) => {
                  handleValueChange(value, field.name);
                }}
                value={form[field.name] || ""}
                {...field}
              />
              {!isValid[field.name] && (
                <small className="error">Invalid Value</small>
              )}
            </React.Fragment>
          ))}
          <button className="btn" type="submit">
            {page.header}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginAndSignup;
