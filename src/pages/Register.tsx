import "../assets/styles/Auth.scss";
import logo from "../assets/images/logo.png";
import BaseInput from "./../components/BaseInput";
import { useEffect, useState } from "react";
import { MdOutlineMail, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { formValidator } from "./../helpers/formValidation";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "./../app/hooks";
import { register } from "../features/authSlice";
import { RegisterUserType } from "../types/authTypes";

const Register = () => {
  const { user, users } = useAppSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: RegisterUserType = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const existingUser = users.find((user) => user.email === formData.email);

    if (formValidator(formData)) {
      toast.warn("Please fill all fields.");
      return;
    }

    if (existingUser) {
      toast.error("An Error occured!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(register(payload));
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      localStorage.setItem("user", JSON.stringify(payload));
    }, 3000);
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <main className="auth_wrapper">
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
          <button type="submit">{loading ? "Loading..." : "Sign up"}</button>
          <p>
            Don't have an Account Yet? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Register;
