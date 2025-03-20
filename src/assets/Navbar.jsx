import React from "react";

function Navbar({ onShowProduits, onShowCategories, onShowSubCategory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        {/*logo */}
      {/*   <a className="navbar-brand" href="/">
          <img
            src="http://127.0.0.1:8000/uploads/logo.png"  // Direct link to the Symfony logo
            alt="Logo"
            style={{ width: "190px", height: "150px" }}
          />
        </a> */}
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={onShowCategories}>
                ACCUEIL
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={onShowProduits}>
                PRODUITS
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={onShowSubCategory}>
                Sous category
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;