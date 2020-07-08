import React from 'react';
import index from '../section3/index.css';
import email from '../../assets/email.svg';
import facebook from '../../assets/facebook.svg';
import whatsapp from '../../assets/whatsapp.svg';


export default function Section3() {

  return (
    <div className="section3">
    <div className="row">
    <div className="col-md-12">
    <h2 className="h2 text-white">Are you Looking to contact us , Here is some ways!</h2>
    <div className="div-container-social">
    <div className="row text-center">
    <div className="col-4">
    <img id="social1" className="socialmedia" height="60" src={facebook}/>
    </div>
    <div className="col-4">
    <img  id="social2" className="socialmedia" height="60" src={whatsapp}/>
    </div>
    <div className="col-4">
    <img  id="social3" className="socialmedia" height="60" src={email}/>
    </div>
   </div>
    </div>
    </div>
    </div>
    <br/>
    </div>
  );
}
