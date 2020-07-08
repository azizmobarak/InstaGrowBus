import React from 'react';
import index from '../section4/index.css';
import pic from "../../assets/girlinsta.svg";
import paymentflat from'../../assets/paymentflat.svg';
import facebook from '../../assets/facebook2.svg';
import skype from "../../assets/skype.svg";
import whatsapp from '../../assets/whatsapp2.svg';
import paypal from "../../assets/paypal.svg";

export default function Section4() {
  return (
    <div className="section4">
    <div className="row">
    <div className="col-sm-8">
    <ul className="listfooter">
    <li className="list-item"><a href="#">About</a></li>
    <li className="list-item"><a href="#">help</a></li>
    <li className="list-item"><a href="#">Business</a></li>
    <li className="list-item"><a href="#">FAQ</a></li>
    <li className="list-item"><a href="#">Service</a></li>
    <li className="list-item"><a href="#">Payment</a></li>
    </ul>
    <br/>
   <br/>
    </div>
    <div className="col-sm-4">
    <img className="pic" src={pic}/>
    </div>
    </div>
    <div className="row py-1">
    <div className="col-sm-8">
    <div className="socialcontainer">
   <ul className="listfootersocial">
    <li><img src={facebook}/></li>
    <li><img src={whatsapp}/></li>
    <li><img src={skype}/></li>
    <li><img src={paypal}/></li>
    </ul>
   </div>
    </div>
    <div className="col-sm-4">
    <img className="pic" src={paymentflat}/>
    </div>
    </div>
    <p className="createdby">Created by Aziz Mobarak</p>
    </div>
  );
}
