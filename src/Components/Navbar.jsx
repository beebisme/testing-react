import React, { useEffect } from "react";
import "../Style/NavbarStyle.css";

const Navbar = () => {
  useEffect(() => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header>
      <a href="/" className="logo">
        Ellys<span>Rahma</span>.
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navList">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/hobby">Hobby</a>
        </li>
        <li>
          <a href="/skill">Skill</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <a href="/" className="top-btn">
        Download CV
      </a>
    </header>
  );
};

export default Navbar;
