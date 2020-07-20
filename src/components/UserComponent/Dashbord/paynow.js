import React, { useState, useEffect } from 'react';
import {addtobasket,cleartable,getitems} from './functions';

export default function Paynow() {

 const [basket,setbasket]=useState(0);
 const [secondstep,setsecondstep]=useState(false);

useEffect(()=>{
   if(secondstep==false){
    var starter = document.getElementById("btnstarter");
    var popular = document.getElementById("btnpopular");
    var pro = document.getElementById("btnpro");

    starter.addEventListener('click',async()=>{
    starter.style.backgroundColor="red";
    starter.disabled="true";
});

    popular.addEventListener('click',async()=>{
    popular.style.backgroundColor="red";
    popular.disabled="true";
});

    pro.addEventListener('click',async()=>{
    pro.style.backgroundColor="red";
    pro.disabled="true";
});
   }
},[]);

const additem=(e,name)=>{
setbasket(addtobasket(name,e));
}

const clearall=()=>{
    var starter = document.getElementById("btnstarter");
    var popular = document.getElementById("btnpopular");
    var pro = document.getElementById("btnpro");

    setbasket(0);

    pro.style.backgroundColor="green";
    pro.disabled =false;
    popular.style.backgroundColor="green";
    popular.disabled=false;
    starter.style.backgroundColor="green";
    starter.disabled=false;

    document.getElementById('icon').style.color="black";
    cleartable();
}

if(secondstep==false){
  return (
    <div className="container paynowsection">
    <br/>
    <nav className="navbar navbar-expand justify-content-end">
    <div id="icon">
    {basket} <i className="fas fa-shopping-basket"></i>
    </div>
    </nav>
    {basket>0?  
       <nav className="navbar navbar-expand justify-content-end">
       <div className="showbtn">
       <button onClick={()=>setsecondstep(true)} className="btn btn-outline-info">Go Next!</button>
       <button onClick={clearall} className="btn btn-outline-info">clear</button>
       </div>
       </nav>
         :
         <p></p>
        }
    <br/>
    <div className="row">
    <div className="card cardpayment">
    <div className="card-header titlecard">Starter</div>
    <div className="card-body cardbodytext">
    Start your service now and get exactly what we promice you!
    </div>
    <div className="card-footer">
    <button id="btnstarter" onClick={(e)=>additem('starter',e)} className="btn btn-success">Choose plan</button>
    </div>
    </div>

    <div className="card cardpayment">
    <div className="card-header titlecard">Popular</div>
    <div className="card-body cardbodytext">
    Start your service now and get exactly what we promice you!
    </div>
    <div className="card-footer">
    <button id="btnpopular" onClick={(e)=>additem('starter',e)}  className="btn btn-success">Choose plan</button>
    </div>
    </div>

    <div className="card cardpayment">
    <div className="card-header titlecard">Pro</div>
    <div className="card-body cardbodytext">
    Start your service now and get exactly what we promice you!
    </div>
    <div className="card-footer">
    <button id="btnpro" onClick={(e)=>additem('starter',e)}  className="btn btn-success">Choose plan</button>
    </div>
    </div>
    </div>
    </div>
  );
}
else{

const getallitems=()=>{
 getitems.map(item=>{
        return <li>{item}</li>
       })
}
    return(
        <div className="container secondstepdiv">
        <div className="row">
        <div className="col-sm-6">
        <div className="card border-dark">
        <div className="card-title">Payment</div>
        <div className="card-body">
        You will pay for 
        <ul>
        {
            getallitems
        }
        </ul>
        </div>
        </div>
        </div>
        <div className="col-sm-6"></div>
        </div>
        </div>
    )
}
}
