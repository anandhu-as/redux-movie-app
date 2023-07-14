import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/features/login/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    if (username.length < 6) {
      setUsernameError("Username must be at least 6 characters long.");
      return;
    }

    if (!email.includes("@") || !email.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    dispatch(login({ email, username, password }));
    navigate("/home");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png")`,
      }}
    >
      <div className="w-full sm:w-1/2 md:w-1/3 bg-white p-8 rounded-lg shadow flex flex-col items-center">
        <div>
          <h1 className="text-center">Login to access the app</h1>
        </div>
        <img
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          alt=""
          className="mx-auto w-32 h-32 mb-4"
        />
        <div className="mb-4 flex items-center">
          <i className="fa fa-envelope ml-3" aria-hidden="true"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 text-black py-2 px-4 rounded ml-2 outline-none"
            aria-required
          />
          <div className="text-red-500 mt-1">{emailError}</div>
        </div>
        <div className="mb-4 flex items-center">
          <i className="fas fa-user ml-2"></i>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-200 text-black py-2 px-4 rounded ml-2 outline-none"
          />
          <div className="text-red-500 mt-1">{usernameError}</div>
        </div>
        <div className="mb-4 flex items-center">
          <i className="fas fa-lock ml-2"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-200 text-black py-2 px-4 rounded ml-2 outline-none"
          />
          <div className="text-red-500 mt-1">{passwordError}</div>
        </div>
        <button
          className="w-32 bg-zinc-600 hover:bg-blue-900 text-white py-2 px-4 rounded animate-pulse"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
