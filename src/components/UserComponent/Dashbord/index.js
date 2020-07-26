import React, { useState } from 'react';
import css from '../Dashbord/index.css';
import Orders from "./orders";
import Services from './services';
import {cleartable} from './functions';
export default function Dashbord() {

const [page,setpage]=useState('orders');

  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand navbar-light">
    <div className="navbar-brand">
    <h2 className="username">Welcome Username!</h2>
    </div>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav navlist">
      <li className="nav-item active">
        <button onClick={()=>{setpage('orders');cleartable();}} className="btn">Orders</button>
      </li>
      <li className="nav-item">
      <button onClick={()=>{setpage('services')}} className="btn">Services</button>
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
      <button onClick={()=>{setpage('orders')}} className="btn">Orders</button>
    </li>
    <li className="nav-item">
    <button onClick={()=>{setpage('services')}} className="btn">Services</button>
    </li>
    <li className="nav-item">
    <button className="btn">Logout</button>
    </li>
  </ul>
    </nav>
   {
     page==='orders'?
     <Orders/>
     :
     <Services/>
   }
   <br/>
   <footer className="footer text-center dashbordfooter">
   <p>Copy Right GrowBuz</p>
   </footer>
    </div>
  );
}
