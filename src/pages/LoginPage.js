import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert2";
import { AuthContext } from "../context/auth/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberme: false,
  });

  useEffect(() => {
    const remembermeEmail = localStorage.getItem("email");
    if (remembermeEmail) {
      setForm((form) => ({
        ...form,
        rememberme: true,
        email: remembermeEmail,
      }));
    }
  }, []);

  const onChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.rememberme) {
      localStorage.setItem("email", form.email);
    } else {
      localStorage.removeItem("email");
    }
    const { email, password } = form;
    const isValid = await login(email, password);
    if (!isValid) {
      SweetAlert.fire(
        "Error",
        "Verifique que sus credenciales sean correctas",
        "error"
      );
    }
  };

  const successLogin = () => {
    return form.email.length > 0 && form.password.length > 0 ? true : false;
  };

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">Chat - Ingreso</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={() => toggleCheck()}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">Recordarme</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          type="submit"
          disabled={!successLogin()}
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default Login;
