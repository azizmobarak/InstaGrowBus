import React from 'react';

export default function Edite() {
  return (
    <div className="container edite">
    <div className="row">
    <div className="col-sm-6 leftsection">
    <p className="titlesection">users section</p><br/>
    <input className="input w-75" placeholder="Search" /><br/>
    <br/>
    <table className="table w-75">
   <tr>
   <td className="w-25 font-weight-bolder">Username</td>
   <td className="font-weight-bolder">Email</td>
   <td>option</td>
   </tr>
    <tr>
    <td>username</td>
    <td> email@email.com</td>
    <td><i className=""></i></td>
    </tr>
    </table>
    </div>
    <div className="col-sm-6 text-center">
    <p className="titlesection">services section</p>
    </div>
    </div>
    </div>
  );
}
