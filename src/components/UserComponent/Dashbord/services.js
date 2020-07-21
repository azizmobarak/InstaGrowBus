import React, { useState, useEffect } from 'react';
import {addtobasket,cleartable,getitems} from './functions';
import {useDispatch, useStore, useSelector} from 'react-redux';
import {getcart} from '../../../reducersctions/cartaction';
import {store} from '../../../index';

export default function Paynow() {

 const [basket,setbasket]=useState(0);
 const [secondstep,setsecondstep]=useState(false);
 const [getitems,setitems]=useState([]);
 const [total,settotal]=useState(0);
 const [method,setmethod]=useState("");
 const dispatcher = useDispatch();
 const carttab = useSelector(state=>state.Cart);
 const forstore = useStore();

useEffect(() => {
    setitems(carttab);
    console.log(carttab)
}, [basket])

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



//add item to basket
const additem=(name,price)=>{
settotal(total+price);
var cart = addtobasket(name,price);
setbasket(cart.count);
dispatcher(getcart(cart.tab))
}

const clearall=()=>{
    var starter = document.getElementById("btnstarter");
    var popular = document.getElementById("btnpopular");
    var pro = document.getElementById("btnpro");

    settotal(0);
    setbasket(0);
    dispatcher({type:"else"})

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
    <div className="container paynowsection text-center">
    <h2 className="txttitle">Services</h2>
    <br/>
    <nav className="navbar navbar-expand justify-content-end">
    <div id="icon">
    {basket} <i className="fas fa-shopping-basket"></i>
    </div>
    </nav>
    {basket>0?  
       <nav className="navbar navbar-expand justify-content-end">
       <div className="showbtn">
       <button onClick={()=>setsecondstep(true)} className="btn btn-outline-info">Checkout Now!</button>
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
    <button id="btnstarter" onClick={(e)=>additem('starter',55)} className="btn btn-success">Add to cart</button>
    </div>
    </div>

    <div className="card cardpayment">
    <div className="card-header titlecard">Popular</div>
    <div className="card-body cardbodytext">
    Start your service now and get exactly what we promice you!
    </div>
    <div className="card-footer">
    <button id="btnpopular" onClick={(e)=>additem('popular',120)}  className="btn btn-success">Add to cart</button>
    </div>
    </div>

    <div className="card cardpayment">
    <div className="card-header titlecard">Pro</div>
    <div className="card-body cardbodytext">
    Start your service now and get exactly what we promice you!
    </div>
    <div className="card-footer">
    <button id="btnpro" onClick={(e)=>additem('pro',240)}  className="btn btn-success">Add to cart</button>
    </div>
    </div>
    </div>
    </div>
  );
}
else{

    return(
        <div className="container secondstepdiv">
        <div className="row">
        <div className="col-sm-6">
        <div className="card w-75 border-dark cardpayment pdcard">
        <div className="card-title titlecard">Payment</div>
        <div className="card-body">
          You will pay for 
        <br/>
        <div className="lisitems">
        {
          getitems.map(item=>{
              return <div className="lidiv">
              <p className="listtext">{item.plan+" : "+item.price+" $"}</p>
              </div>
          })
        }<br/>
        -----------------<br/>
        Total :  {total} $
        </div>
        </div>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="paymentcontainer">
        <h3>pay with :</h3>
        <ul className="list-group">
        <li onClick={()=>setmethod('paypal')} className="list-group-item">Paypal</li>
        <li onClick={()=>setmethod('bitcoin')} className="list-group-item">Bitcoin</li>
        <li onClick={()=>setmethod('westernunion')} className="list-group-item">WesternUnion</li>
        </ul>
        </div>
        <div className="method">
        {
            method
         }
        </div>
        </div>
        </div>
        </div>
    )
}
}
