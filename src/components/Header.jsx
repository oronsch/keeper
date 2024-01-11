import React from "react";
import "../styles/App.css";

/**
 * Header component of the application.
 * Renders the top navigation bar with the application's logo or title.
 */
function Header() {
    return (
      <div className="nav-bar">
        <h1 className="logo-nav"> KEEPER</h1>
      </div>
    );
}

export default Header;
