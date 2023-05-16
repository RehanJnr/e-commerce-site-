
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Header.css";

const Header = () => {
  const navigation = [
    { path: "/", name: " Home" },
    { path: "/about", name: " About" },
    { path: "/Cart", name: " Cart" },
    { path: "/Products", name: " Products" },
    { path: "/more", name: " MoreInfo" },
  ];

  return (
    <div>
      <nav
  style={{ backgroundColor: "#B0f53e" }}
  className="navbar navbar-expand-lg navbar-dark "
>
  <div className="container-fluid d-flex justify-content-between">
    <Link
      to={"/"}
      style={{ color: "black", fontWeight: "bold"}}
      className="navbar-brand"
    >
      <i className="fas fa-shopping-cart me-2"></i> E-Commerce
    </Link>

    <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navigation.map((nav) => (
          <li className="nav-item me-3 me-lg-0">
            <NavLink
              key={nav.name}
              to={nav.path}
              className="nav-link"
              style={{ color: "black" }}
              activeStyle={{ fontWeight: "bold" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.target.style.textDecoration = "none")
              }
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "black" }}
          >
            <i className="fas fa-user"></i>{' '} Profile
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li>
               <Link to={"/admin"} className="dropdown-item" href="#">
                <i className="fas fa-sliders-h fa-fw"></i> Admin
              </Link>
              <Link to={"/user"} className="dropdown-item" href="#">
                <i className="fas fa-sliders-h fa-fw"></i> UserView
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cog fa-fw"></i> Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    

    </div>
  );
};


  export default Header;