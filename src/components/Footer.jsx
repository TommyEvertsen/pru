import React from "react";

const Footer = () => {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            About me
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            CV
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            Research
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            Teaching
          </a>
        </li>
      </ul>
      <p class="text-center text-muted">
        <a href="https://github.com/TommyEvertsen" class="developed">
          Developed by Tommy Huynh Evertsen
        </a>
      </p>
    </footer>
  );
};

export { Footer };
