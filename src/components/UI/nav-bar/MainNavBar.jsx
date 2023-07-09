import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light ms-3" to="/" onClick={collapseNav}>
          My Portfolio
        </Link>
        
        <button
          ref={navButton}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav" ref={linksContainerRef}>
          <ul className="navbar-nav ms-auto me-3" >
            <li className="nav-item" >
              <NavLink className="nav-link text-light" aria-current="page" to="/about" onClick={collapseNav} >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/projects" onClick={collapseNav} >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/certificates"  onClick={collapseNav} >
                Certificates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/test-zone"  onClick={collapseNav} >
                Test
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-light" href="https://drive.google.com/file/d/1RBZLcNbRzvwgJaYDIUh5gM47I6FH8-r-/view?usp=share_link" target="_blank" onClick={collapseNav} rel="noreferrer" >Curiculum Vitae</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
