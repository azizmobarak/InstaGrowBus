import React from 'react';
import index from "../section2/index.css";
import pic240 from "../../assets/240.svg";
import pic120 from "../../assets/120.svg";
import pic55 from "../../assets/55.svg";
import {Button3,Button2,Button1} from '../paypal/index';
export default function Section2() {

  return (
    <div id="section2" className="row w-100 section2">
    <div className="col-md-4 colcenteritem">
    <img className="picprice" src={pic55}/><br/>
    <Button1/>
    </div>
    <div className="col-md-4 colcenteritem">
    <img  className="picprice" src={pic120}/><br/>
     <Button2/>
    </div>
    <div className="col-md-4 colcenteritem">
   <img className="picprice" src={pic240}/><br/>
    <Button3/>
    <div id="paypal-button-container"></div>
    </div>
    </div>
  );
}
