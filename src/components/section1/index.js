import React from 'react';
import index from "../section1/index.css";
import operator from '../../assets/operator-avatar.svg';

export default function Section2() {
  return (
    <div className="row container-fluid section1">
    <div className="col-md-4 text-center">
    <div className="div-col">
    <i className="fas fa-business-time"></i>
    </div>
    <p className="txtdesc">We focus on time</p>
    </div>
    <div className="col-md-4 text-center">
    <div className="div-col">
    <i className="fas fa-money-bill"></i>
    </div>
    <p className="txtdesc">Safe payment</p>
    </div>
    <div className="col-md-4 text-center">
    <div className="div-col">
    <img height="70" src={operator}/>
    </div>
    <p className="txtdesc">Support 24/24</p>
    </div>
    </div>
  );
}
