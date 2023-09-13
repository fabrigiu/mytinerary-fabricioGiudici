import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];
  return links.map((link) => (
    <Link
      className="hidden mx-2 md:flex flex-row md:text-base hover:animate-pulse transition duration-300 transform hover:-translate-y-0.5"
      key={link.title}
      to={link.to}
    >
      {link.title}
    </Link>
  ));
}

export default Menu;
