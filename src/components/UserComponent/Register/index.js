import React, { useState, useEffect } from 'react';
import css from '../Register/index.css';
import {adduser} from './function';

export default function Register() {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [name,setname]=useState('');

const submitform=(e)=>{
  e.preventDefault();
  adduser(name,email,password);
}

  return (
    <div className="registernsection">
    <form className="form-group" onSubmit={submitform}>
    <br/>
    <div className="form-row">
    <input onChange={(e)=>setname(e.target.value)} type="text" className="form-control" placeholder="Full Name" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input onChange={(e)=>setemail(e.target.value)} type="Email" className="form-control" placeholder="Email" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" placeholder="Password" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input type="submit" className="btn btn-primary btnregister" value="Create New Account +"/><br/>
    </div>
    <br/>
    <p>Login <a href='/login'>Here</a> or back to <a href="/">Home</a></p>
    </form>
    </div>
  );
}
