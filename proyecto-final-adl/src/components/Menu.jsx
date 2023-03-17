import React from "react";


export default function Menu() {
    return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-sticky position-sticky min-vh-100">
          <div className="dropdown">
      <a href="/profile" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="/profile">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/">Sign out</a></li>
      </ul>
    </div>    
    <hr/>
  
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="/" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="/gallery" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Gallery
        </a>
      </li>
      <li>
        <a href="/" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
    </ul>
    </div>
    )
}