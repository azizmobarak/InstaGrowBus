import React, { useState } from 'react';
import css from '../AdminComponent/index.css';
import Desktop from './desktop';
import Edite from './Edite';

export default function Admin() {

const [section,setsction]=useState('');

const main=(section)=>{
switch (section){
  case "edite":
    return <Edite/>
  default:
    return <Desktop/>
}
}

  return (
    <div className="admindash">
    <div className="row">
    <div className="col-md-1 adminmenu">
       <ul className="listmenu">
       <li onClick={()=>setsction('desktop')} ><i className="fas fa-desktop icon"></i></li>
       <li onClick={()=>setsction('edite')} ><i className="far fa-edit icon"></i></li>
       <li><i className="far fa-envelope icon"></i></li>
       <li><i className="far fa-folder-open icon"></i></li>
       </ul>
    </div>
    <div className="col-md-11">
    {main(section)}
    </div>
    </div>
    </div>
  );
}
