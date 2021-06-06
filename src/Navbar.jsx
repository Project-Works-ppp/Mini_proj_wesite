import React from "react";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {TextField,Button,Divider} from "@material-ui/core";

import purple from '@material-ui/core/colors/purple';
import { NavLink } from "react-router-dom";
const Navbar=()=>{


    return(
        <>
        
                
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
  <div className="container-fluid">
    
  <AcUnitIcon style={{ color: purple[1000] , fontSize: 50 }} />
    <b className="navbar-brand" >Student<b className="navbar-brand1">Arena</b></b>
    
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false"
     aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link"aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link"aria-current="page" to="/Signup">Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link"aria-current="page" to="/Login">Login</NavLink>
        </li>
        
       
      </ul>
      <form className="d-flex">
        
        <input className="form-control me-2" type="search" placeholder="Search"
        
        aria-label="Search"/>

        <Button className="button1" color="primary" variant="outlined" >Search</Button>
        
      </form>
    </div>
  </div>
</nav>

        </>
    );
};

export default Navbar;