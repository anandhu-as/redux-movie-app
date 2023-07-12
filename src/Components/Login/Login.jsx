import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/movie/MovieSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    setUsernameError("");
    setEmailError("");

    if (username.length < 6) {
      setUsernameError("Username must be at least 6 characters long.");
      return;
    }

    if (!email.includes("@") || !email.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address.");
      return;
    }

    dispatch(login({ email, username }));
    navigate("/home");
  };

  return (
    <div className="login">
      <div>
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt=""
          style={{ width: "100px", height: "100px", marginLeft: "80px" }}
        />
        <i className="fa fa-envelope" aria-hidden="true"></i>

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200 text-black py-2 px-4 rounded ml-2"
          aria-required
        />
        <div className="error">{emailError}</div>
      </div>
      <br />
      <div>
        <i className="fas fa-user mr-2"></i>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="bg-gray-200 text-black py-2 px-4 rounded"
        />
        <div className="error">{usernameError}</div>
      </div>
      <br />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded ml-6"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
