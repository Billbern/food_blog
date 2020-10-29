import React from "react";

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
      <span>Simple Food</span>
      <ul>
        {navLinks.map((item, key) => (
          <li key={key}> {item.title}</li>
        ))}
      </ul>
    </nav>
  );
}
