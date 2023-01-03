import React from "react";
import "./styles.css";
import Validation from "../Validation";

const Form = (props) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className="container-bienv">
      <span className="logo-span animate__animated animate__zoomIn"></span>

      <div className="container-form animate__animated animate__zoomInLeft">
        <h1>Bienvenido! </h1>
        <form onSubmit={handleSumbit}>
          <div className="input-container">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="input"
            />

          </div>
          {errors.username && (
              <p className="text-error">💀 {errors.username}</p>
            )}

          <div className="input-container">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="input password"
            />

          </div>
          {errors.password && (
              <p className="text-error">💀 {errors.password}</p>
            )}
          <div className="button-container">
            <button className="button-ingresar">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
