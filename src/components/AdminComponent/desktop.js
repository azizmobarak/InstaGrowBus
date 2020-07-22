import React,{useEffect} from 'react';
import {chartusers,serviceschart,newusers} from './charts';

export default function Desktop() {

    useEffect(() => {
        chartusers("chartcanavas1");
        serviceschart('chartcanavas2')
        newusers('numberusers');
    });

  return (
    <div className="admindesktop">
  <div className="row">
  <div className="col-sm-4 justify-content-center text-center" >
    <div className="divstatics">
    <canvas id="chartcanavas1">
    </canvas>
    </div>
  </div>
  <br/>
  <div className="col-sm-4 justify-content-center text-center" >
  <div className="divstatics">
  <canvas id="chartcanavas2">
  </canvas>
    </div>
  </div>
  <br/>
  <div className="col-sm-4 justify-content-center text-center" >
  <div className="divstatics">
  users:
  <br/>
  <div id="numberusers">

  </div>
    </div>
  </div>
  </div>
  <div className="row feedback">
  <h2>Feedback</h2><br/>
  <table className="table">
  <thead className="headtable">
  <tr>
  <td className="h3 w-25">User</td>
  <td className="h3">Feedback</td>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>usernmae</td>
  <td>comment</td>
  </tr>
  </tbody>
  </table>
  </div>
    </div>
  );
}
