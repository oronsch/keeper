import React from "react";
import Card from "react-bootstrap/CardFooter";
import "../styles/Footer.css"

// Constants for the name and current year
const name = "Oron";
const year = new Date().getFullYear();

/**
 * Footer component of the application.
 * Renders the footer section with the creator's name and the current year.
 */
function Footer() {
  return (
    // Using Card from react-bootstrap to style the footer
    <Card className="card-footer">
      <footer>
        <p>
          {/* Displaying the name and year dynamically */}
          App Made by {name} &copy; {year}
        </p>
      </footer>
    </Card>
  );
}

export default Footer;
