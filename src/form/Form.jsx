import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const validate = (input) => {
    let errors = {};

    if (!input.name) {
      errors.name = "plase complete the input name";
    } else if (!input.email) {
      errors.name = "plase complete the input email";
    } else if (!input.password) {
      errors.name = "plase complete the input password";
    } else if (!input.description) {
      errors.name = "plase complete the input description";
    }

    return errors;
  };

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleErrorSubmit = () => {
    setErrors(validate({ ...input }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Send Form!!");
    setInput({
      name: "",
      email: "",
      password: "",
      description: "",
    });
    navigate("/thanks");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          className="form__name"
          value={input.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        {errors.name && <p className="create__error_inputs">{errors.name}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          className="form__email"
          value={input.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        {errors.email && <p className="create__error_inputs">{errors.email}</p>}
        <input
          type="password"
          placeholder="Enter Password"
          className="form__password"
          value={input.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        {errors.password && (
          <p className="create__error_inputs">{errors.password}</p>
        )}
        <textarea
          placeholder="Enter Description"
          className="form__description"
          value={input.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        {errors.description && (
          <p className="create__error_inputs">{errors.description}</p>
        )}
        <button
          className="form__btn"
          onClick={handleErrorSubmit}
          disabled={Object.keys(errors).length === 0 ? false : true}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
