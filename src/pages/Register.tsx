import "../assets/styles/Auth.scss";
import Main from "./../components/Main";
import logo from "../assets/images/logo.png";
import BaseInput from "./../components/BaseInput";
import { useState } from "react";
import { MdOutlineMail, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { formValidator } from "./../helpers/formValidation";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    if (formValidator(formData)) {
      console.log({ message: "Error!!" });
    } else {
      console.log({ payload });
      console.log(Object.values(formData));
    }
  };

  return (
    <Main>
      <div className="auth_wrapper">
        <form className="auth" onSubmit={handleRegister}>
          <div className="auth_form_header">
            <div>
              <img src={logo} alt="" />
              <h1>FriendZone</h1>
            </div>
          </div>

          <div className="auth_form_body">
            <BaseInput
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              setFormData={setFormData}
              icon={null}
              handleClick={undefined}
            />
            <BaseInput
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              setFormData={setFormData}
              icon={<MdOutlineMail />}
              handleClick={undefined}
            />
            <BaseInput
              type={`${!showPassword ? "password" : "text"}`}
              placeholder="Password"
              name="password"
              value={formData.password}
              setFormData={setFormData}
              icon={!showPassword ? <IoMdEyeOff /> : <MdOutlineRemoveRedEye />}
              handleClick={handleShowPassword}
            />
            <button type="submit">Log in</button>
            <p>
              Don't have an Account Yet? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Register;
