import React from "react";
import "../components/css/Footer.css";

const Footer = () => {
  return (
    <footer className="py-3 my-4 footer">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            CV
          </a>
        </li>

        <li className="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            Research
          </a>
        </li>
        <li className="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            Teaching
          </a>
        </li>
      </ul>
      <p className="text-center text-muted tommy">
        <a href="https://github.com/TommyEvertsen" class="developed">
          Developed by Tommy Huynh Evertsen
        </a>
      </p>
    </footer>
  );
};

export { Footer };
