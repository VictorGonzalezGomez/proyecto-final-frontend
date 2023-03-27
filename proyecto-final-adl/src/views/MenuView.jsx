import React from "react";
import { ChartContext } from "../context/ChartContext";
import { NavLink } from "react-router-dom";



export default function Menu() {
    const { charts } = React.useContext(ChartContext)
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
    return (
<>
     
     
          <div className="d-flex felx-column justify-content-between col-auto bg-dark min-vh-100">
            <div>
              <ul className="nav nav-pills flex-column mt-2 mt-ms-0" id="menu">
                <li className="nav-item my-ms-1 my-2 ">
                  <NavLink to="/summary" className={`nav-link text-white  ${setActiveClass}`}>
                  <span className="ms-2 d-none d-sm-inline">Summary</span>
                  </NavLink>
                </li>
                <li className="nav-item disable my-ms-1 my-2">
                  <a className="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-current="page">
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                  </a>
             
                </li>
                <ul className="nav collapse ms-1 flex-column" id="dashboard-collapse">
                      {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
                        <li key={chart.id} className="nav-item">
                          <NavLink to={`/dashboard/${chart.id}`} className= {`nav-link text-white ${setActiveClass}`}>
                            {chart.title}
                          </NavLink>
                        </li>
                      ))
                        : <li><a href="/" className="d-inline-flex text-decoration-none text-white rounded">No charts yet</a></li>
                      }
                </ul>

                <li className="nav-item disable my-ms-1 my-2">
                  <a href="#sidemenu" data-bs-toggle="collapse" className="nav-link text-white" aria-current="page">
                    <span className="ms-2 d-none d-sm-inline">Team</span>
                  </a>
                </li>

                <ul className="nav collapse ms-1 flex-column" id="sidemenu" data-bs-parent="menu"> 
                  <li className="nav-item">
                    <a href="/team-list" className="nav-link text-white"  aria-current="page">Team List</a>
                  </li>
                  <li className="nav-item">
                    <a href="/register-user" className="nav-link text-white">Add new user</a>
                  </li>
                </ul>
                
                <li className="nav-item my-ms-1 my-2">
                     <a href="/" className="nav-link text-white" aria-current="page">
                    <span className="ms-2 d-none d-sm-inline">Customers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      
  
</>
    // <div className="col-lg-2 col-md-3 d-flex flex-column p-3 text-bg-dark min-vh-100">
    //   <div className="dropdown">
    //   <a href="/profile" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //     <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
    //     <strong>John Ipson</strong>
    //   </a>
    //   <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
    //     <li><a className="dropdown-item" href="/profile">Profile</a></li>
    //     <li><hr className="dropdown-divider"/></li>
    //     <li><a className="dropdown-item" href="/">Sign out</a></li>
    //   </ul>
    // </div>    
    // <hr/>
  
    // <ul className="nav nav-pills flex-column mb-auto">
    //   <li className="nav-item">
    //     <NavLink to="/summary" className={`nav-link text-white ${setActiveClass}`}>
    //       Summary
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <button className="btn btn-toggle d-inline-flex text-white nav-link align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
    //       Dashboard
    //     </button>
    //     <div className="collapse" id="dashboard-collapse">
    //     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
    //       {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
    //         <li key={chart.id}><NavLink to={`/dashboard/${chart.id}`} className= {`nav-link text-white ${setActiveClass}`}>
    //           {chart.title}
    //           </NavLink>
    //           </li>
    //       ))
    //       : <li><a href="/" className="d-inline-flex text-decoration-none text-white rounded">No charts yet</a></li>
    //       }
    //       </ul>
    //     </div>
    //   </li>
    // </ul>
    // </div>
    )
}