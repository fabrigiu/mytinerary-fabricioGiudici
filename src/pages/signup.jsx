import React from "react";
import "../styles/signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { user_register } from "../store/actions/userActions";
import { GoogleSignIn } from "../components/googleSignin";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    userName: "",
    image: "",
  });

  const countries = ["Argentina", "Chile", "Uruguay", "Colombia", "Peru", "Brasil", "Mexico", "Paraguay"];

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigator = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        user_register({
          data: formData,
        })
      );
      navigator("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex h-full items-center justify-center bg-orange-200 m-10 bg-cover bg-top bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 h-[80vh]">
        <div className="max-w-md w-full space-y-8 bg-slate-50 border border-black rounded-lg px-4 py-6 shadow-xl sm:rounded-lg sm:px-10 sm:py-8 ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/6213/6213814.png"
              alt="icon"
            />

            <h2 className="text-orange-400 mt-6 text-center text-3xl font-extrabold ">
              Sign up
            </h2>
          </div>

          <form
            className="mt-8 space-y-6 "
            action=""
            method="POST"
            onSubmit={handleSignUp}
          >
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <label htmlFor="userName" className="sr-only">
                  User Name
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="userName"
                  onChange={handleInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-orange-300 placeholder-slate-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-orange-300 placeholder-slate-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  name="country"
                  id="country"
                  onChange={handleInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-orange-300 placeholder-slate-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Country"
                >
                  {countries.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="image" className="sr-only">
                  Image
                </label>

                <input
                  id="image"
                  name="image"
                  type="text"
                  autoComplete="image"
                  onChange={handleInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-orange-300 placeholder-slate-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Image"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-orange-300 placeholder-slate-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <GoogleSignIn />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-400 focus:outline-none"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <Link
                  to="/signin"
                  className="font-medium text-orange-600 hover:text-orange-700"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
