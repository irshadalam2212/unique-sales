import React, { useState } from "react";
import loginImg from "../assets/images/makeup-brushes.avif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", formdata);
    setFormdata({
      email: "",
      password: "",
    });
    toast.success("login successfully");
    navigate("home");
  };

  return (
    <div className="bg-[#9a616d] min-h-screen flex items-center justify-center py-5 md:py-0">
      <div className="flex flex-col md:flex-row justify-center items-center w-[95%] max-w-5xl h-auto md:h-[80vh] rounded-xl overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full">
          <img
            src={loginImg}
            alt="makeup-brush"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="bg-white w-full md:w-1/2 min-h-[50vh] md:min-h-full flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase text-center text-[#332d2d]">
            Unique Sales
          </h1>

          <h2 className="text-lg md:text-xl text-center text-gray-600 mt-2">
            Sign into your account
          </h2>

          <form onSubmit={submitHandler} className="mt-6 flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="Email Address"
              name="email"
              value={formdata.email}
              onChange={changeHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={formdata.password}
              onChange={changeHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />

            <button className="uppercase w-full bg-[#332d2d] text-white py-2 rounded-md shadow-lg hover:bg-[#514646] transition-colors duration-300">
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-500">Forgot Password?</p>
          </div>

          {/* <div className="text-center mt-2">
            <span className="text-gray-500">Don't have an account?</span>
            <Link to={"signup"} className="text-blue-400 ml-1 hover:underline">
              Register here
            </Link>
          </div> */}

          <div className="text-center text-gray-500 mt-6 text-sm">
            Terms of use. Privacy policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
