import React, { useState } from 'react';
import css from '../Dashbord/index.css';
import Services from "./services";
import Paynow from './paynow';
export default function Dashbord() {

const [page,setpage]=useState('services');

  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand navbar-light">
    <div className="navbar-brand">
    <h2 className="username">Welcome Username!</h2>
    </div>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav navlist">
      <li className="nav-item active">
        <button onClick={()=>{setpage('services')}} className="btn">Services</button>
      </li>
      <li className="nav-item">
      <button onClick={()=>{setpage('paynow')}} className="btn">PayNow</button>
      </li>
      <li className="nav-item">
      <button className="btn">Logout</button>
      </li>
    </ul>
    </div>
    </nav>
    <nav className="navbar navbar-expand justify-content-center secondnav">
    <ul className="navbar-nav">
    <li className="nav-item active">
      <button onClick={()=>{setpage('services')}} className="btn">Services</button>
    </li>
    <li className="nav-item">
    <button onClick={()=>{setpage('paynow')}} className="btn">PayNow</button>
    </li>
    <li className="nav-item">
    <button className="btn">Logout</button>
    </li>
  </ul>
    </nav>
   {
     page==='services'?
     <Services/>
     :
     <Paynow/>
   }
    </div>
  );
}
