import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" style={props.my_style} to="/"> */}
        <a className="navbar-brand" style={props.my_style} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link
                className="nav-link active"
                style={props.my_style_2}
                aria-current="page"
                to="/"
              >
                Home
              </Link> */}
              <a
                className="nav-link active"
                style={props.my_style_2}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" style={props.my_style_2} to="/about">
                {props.aboutText}
              </Link> */}
              <a className="nav-link" style={props.my_style_2} href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch ${props.text}`}>
            <input
              onClick={props.togglemode}
              style={props.border}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.dark}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.proptype = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = { title: "title here", abouttext: "about the website" };
