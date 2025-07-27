import React from "react";
import "./admin-navbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div class="navbar-logo">
        <a href="/">
          <img src="/img/logo-min.svg" className="logo" alt="Zeleny logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/admin/admin-panel">
            <img src="/img/plus.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/admin/admin-gallery">
            <img src="/img/image.svg" alt="" />
          </a>
        </li>
      </ul>
      <div class="logout">
        <li>
          <a href="https://www.filipzeleny.cz/php/logout.php">
            <img src="/img/logout.svg" alt="" />
          </a>
        </li>
      </div>
    </nav>
  );
};

export default AdminNavbar;
