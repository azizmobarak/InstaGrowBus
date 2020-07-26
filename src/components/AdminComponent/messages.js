import React from 'react';
import css from './index.css';

export default function Messages() {
  return (
    <div className=' py-5'>
    <div className="row">
    <div className="col-sm-12">
    <div className="card bg-danger text-white align-content-center text-center">
    <p>Note : choose emails from the right bar and past your html code inside the text area and click send to notify users app</p>
    </div>
    </div>
    </div>
    <br/>
    <div className="row">
    <div className="col-sm-8">
    <form className="form-group">
    <div className="form-row">
   <textarea cols="50" rows="10" type="text" className="form-control" placeholder="Message"></textarea>
    </div>
    <br/>
    <div className="form-row">
    <input type="submit" value="Send Messages" className="btn btnadmin-sendemail w-100" />
    </div>
    </form>
    </div>
    <div className="col-sm-4">
    <div className="card">
    <div className="card-header">
    <input type="email" placeholder="search email" className="input w-100" />
    </div>
    <br/>
    <div className="divtablecontainer">
    <table className="table">
    <tr>
    <td><input type="checkbox" className="checkbox-light"/></td>
    <td className="font-weight-bolder">Select All</td>
    </tr>
    <tr>
    <td><input type="checkbox" className="checkbox-light"/></td>
    <td>
    <label>email@emai.com</label>
    </td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
