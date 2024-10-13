import React, { useState } from "react";
import signupImg from "../assets/images/signupImg.webp";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    cnfPassword: "",
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Formdata", formdata);
    setFormdata({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      cnfPassword: "",
    });
    toast.success("Signup Succesfully");
    navigate("/");
  };
  return (
    <div className="bg-[#9a616d] min-h-screen flex items-center justify-center py-5 md:py-0">
      <div className="flex flex-col md:flex-row justify-center items-center w-[95%] max-w-5xl h-auto md:h-[80vh] rounded-xl overflow-hidden shadow-lg">
        {/* Left Form Section */}
        <div className="bg-white w-full md:w-1/2 min-h-[50vh] md:min-h-full flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase text-center text-[#332d2d]">
            Unique Sales
          </h1>

          <h2 className="text-lg md:text-xl text-center text-gray-600 mt-2">
            Sign up to explore business
          </h2>

          <form onSubmit={submitHandler} className="mt-6 flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Firstname"
                name="firstname"
                value={formdata.firstname}
                onChange={changeInputHandler}
                className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
              />
              <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                value={formdata.lastname}
                onChange={changeInputHandler}
                className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
              />
            </div>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={formdata.email}
              onChange={changeInputHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formdata.mobile}
              onChange={changeInputHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formdata.password}
              onChange={changeInputHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cnfPassword"
              value={formdata.cnfPassword}
              onChange={changeInputHandler}
              className="w-full outline-none px-3 py-2 bg-[#efefee] border border-gray-400 rounded-md text-black"
            />

            <button className="uppercase w-full bg-[#332d2d] text-white py-2 rounded-md shadow-lg hover:bg-[#514646] transition-colors duration-300">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-2">
            <span className="text-gray-500">Already registered?</span>
            <Link to={"/"} className="text-blue-400 ml-1 hover:underline">
              Login Here
            </Link>
          </div>

          <div className="text-center text-gray-500 mt-6 text-sm">
            Terms of use. Privacy policy
          </div>
        </div>
        {/* Right Image Section */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full">
          <img
            src={signupImg}
            alt="makeup-brush"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
