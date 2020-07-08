import React from 'react';
import index from '../section4/index.css';
import pic from "../../assets/girlinsta.svg";
import paymentflat from'../../assets/paymentflat.svg';

export default function Section4() {
  return (
    <div className="section4">
    <div className="row">
    <div className="col-sm-8">
    <ul className="listfooter">
    <li className="list-item">About</li>
    <li className="list-item">About</li>
    <li className="list-item">About</li>
    <li className="list-item">About</li>
    </ul>
    </div>
    <div className="col-sm-4">
    <img className="pic" src={pic}/>
    </div>
    </div>
    <div className="row py-1">
    <div className="col-sm-8">
    </div>
    <div className="col-sm-4">
    <img className="pic" src={paymentflat}/>
    </div>
    </div>
    </div>
  );
}
