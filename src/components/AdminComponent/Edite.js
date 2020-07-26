import React from 'react';

export default function Edite() {
  return (
    <div className="container edite">
    <div className="row">
    <div className="col-sm-6 leftsection">
    <p className="titlesection">users section</p>
    <input className="input w-75" placeholder="Search" /><br/>
    <br/>
    <table className="table w-100 trtablescroll">
   <tr>
   <td className="w-25 font-weight-bolder">Username</td>
   <td className="font-weight-bolder">Email</td>
   <td className="font-weight-bolder">option</td>
   </tr>
    <tr className="rowstr">
    <td>username</td>
    <td> email@email.com</td>
    <td><button className="btn border-white bg-primary"><i className="fas fa-edit"></i></button></td>
    </tr>
    </table>
    </div>
    <div className="col-sm-6 text-center">
    <p className="titlesection">services section</p>
    <div className="card">
    <div className="titlecard">Add new</div>
    <div className="card-body">
    <form className="form-group">
    <div className="form-row">
    <input type="text" className="form-control" placeholder="Title" />
    </div><br/>
    <div className="form-row">
    <textarea cols={50} rows={5} className="form-control" placeholder="Description" ></textarea>
    </div><br/>
    <div className="form-row">
    <input id="file" name="file" className="fileupload" type="file" placeholder="upload" />
    <label for="file" >choose file</label>
    </div><br/>
    <div className="form-row">
    <input className="btn btn-primary w-100" type="submit" value="+ Add"/>
    </div><br/>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
