import React from 'react';
import {boltlogo} from "../assets/index";

const Navbar = () => {
  return ( <nav className="navbar navbar-expand-lg bg-white">
  <a className="navbar-brand" href="#">
  <img className="nav-link" src={boltlogo} alt="logo" />
  </a>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">
        Ride <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Become a Driver
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Fleet
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Business
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Scooters
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Drive
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Food
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Cities
        </a>
      </li>
    </ul>
  </div>


  <button type="submit" className="btn nav-btn btn-default rounded-5">Log in</button>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

</nav>
);
};

export default Navbar