/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>RuteLari</li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, UI Coded by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          . Developed using ReactJS Technology
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
