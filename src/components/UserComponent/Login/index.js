import React from 'react';
import css from '../Login/index.css';

export default function Login() {
  return (
    <div className="loginsection">
    <form className="form-group">
    <br/>
    <div className="form-row">
    <input type="Email" className="form-control inptform" placeholder="Email" />
    </div>
    <br/>
    <div className="form-row">
    <input type="password" className="form-control inptform" placeholder="Password" />
    </div>
    <br/>
    <div className="form-row">
    <input type="submit" className="btn btn-primary btnlogin" value="Login"/><br/>
    </div>
    <br/>
    <p>Back to <a href="/">Home</a> or <a href="/newaccount">Create New Account</a></p>
    </form>
    </div>
  );
}
