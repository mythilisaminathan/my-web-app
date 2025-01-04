import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <header className="container py-3">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="mb-0">Mythili</h1>
          </div>
          <div className="col-auto">
            <Link to="/" className="h3 mb-0 text-decoration-none me-3">
              01. Home
            </Link>
            <Link to="/about" className="h3 mb-0 text-decoration-none me-3">
              02. About
            </Link>
            <Link to="/projects" className="h3 mb-0 text-decoration-none me-3">
              03. Projects
            </Link>
            <Link to="/contact" className="h3 mb-0 text-decoration-none">
              04. Contact
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
