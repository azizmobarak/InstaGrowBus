import React from 'react';
import css from '../Register/index.css';

export default function Register() {
  return (
    <div className="registernsection">
    <form className="form-group">
    <br/>
    <div className="form-row">
    <input type="text" className="form-control" placeholder="Full Name" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input type="Email" className="form-control" placeholder="Email" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input type="password" className="form-control" placeholder="Password" /><br/>
    </div>
    <br/>
    <div className="form-row">
    <input type="submit" className="btn btn-primary btnregister" value="Create New Account"/><br/>
    </div>
    <br/>
    <p>Login <a href='/login'>Here</a> or back to <a href="/">Home</a></p>
    </form>
    </div>
  );
}
