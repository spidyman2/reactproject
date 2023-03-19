// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
      
//     </div>
//   )
// }


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">{props.about}</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" onClick = {props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "enable dark mode" : "enable light mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired
// } //// iska mtlb hai ki hame usme kuch na kuch value paas karni hogi tab wo error nhi show karge....


//  Navbar.defaultProps = {
//      title : 'himanshumuni',
//      about :  'nothing to do'
//  } /// aise bhi value pass kar skte hai 