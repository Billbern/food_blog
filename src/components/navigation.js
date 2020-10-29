import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Lifestyle",
    path: "/",
  },
  {
    title: "Recipes",
    path: "/recipes",
  },
  {
    title: "Tips",
    path: "/tips",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default function Navigation() {
  return (
    <nav className="site-navbar">
      <span> <Link to="/">Simple Food</Link></span>
      <ul>
        {navLinks.map((item, key) => (
          <li key={key}>
            <Link to={item.path}> {item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
