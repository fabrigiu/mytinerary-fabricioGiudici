import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { user_logout } from "../store/actions/userActions";
import Menu2 from "./Menu2";
import Menu from "./Menu";

function Header() {
  const user = useSelector((store) => store.userReducer.user);

  const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg";

  const dispatch = useDispatch();


  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      dispatch(user_logout());
    } catch (err) {
      console.log(err);
    }
  };

  const [showDropdown, toggleDropdown] = useState(false);

  return (
    <header className="navbar flex justify-between items-center text-base pt-1 pb-1 w-full font-semibold font-custom">
      <h1 className="text-xl sm:text-xl">My Tinerary</h1>
      <nav className="flex justify-between items-center gap-3">
        <Menu />
        <div
          className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center
          sm:gap-6
          "
        >
          
          <button
            onClick={() => toggleDropdown(!showDropdown)}
            className="flex items-center gap-2 text-white"
          >
            {showDropdown ? null : user ? (
              <button
                className="navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg text-center px-5 py-3 text-black transition duration-300 transform hover:-translate-y-0.5"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <LinkRouter
                to="/signin"
                className="navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg text-center px-5 py-3 text-black transition duration-300 transform hover:-translate-y-0.5"
              >
                Sign in
              </LinkRouter>
            )}
            {user ? (
              <div className="flex items-center gap-2 rounded-full px-2 py-2 transition cursor-pointer text-black hover:text-black">
                <img
                  className="w-[55px] h-[55px] rounded-full object-cover"
                  src={user.image || defaultImage}
                  alt=""
                />
                <span className="text-bolder">{user.userName}</span>
              </div>
            ) : (
              <>
                <img
                  className="w-[55px] h-[55px] rounded-full object-cover"
                  src={defaultImage}
                  alt=""
                />
                <span className="text-bolder"></span>
              </>
            )}
          </button>
        </div>
        <Menu2 />
      </nav>
    </header>
  );
}

export default Header;
