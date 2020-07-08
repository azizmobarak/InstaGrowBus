import React, { useState } from 'react';
import form from './form.css';
import send from '../../assets/send.png';

export default function Form() {

const [topic,settopic] = useState('Choose a topic')

  return (
    <form className="form-group w-75 justify-content-center form-home">
    <div className="form-row">
    <input className="form-control"  placeholder="Email"/>
    </div>
    <br/>
    <div className="form-row justify-content-center">
    <div class="btn-group">
  <button type="button" class="btn btn-optionscolor dropdown-toggle text-white" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
   {topic}
  </button>
  <div class="dropdown-menu dropdown-menu-lg-right">
    <button onClick={e=>settopic('Followers')} class="dropdown-item" type="button">Followers</button>
    <button onClick={e=>settopic('Prices')} class="dropdown-item" type="button">Prices</button>
    <button onClick={e=>settopic('Others')} class="dropdown-item" type="button">Others</button>
  </div>
</div>
    </div>
    <br/>
  {
    topic==="Others"?
    (
      <div className="form-row">
      <input className="form-control"  placeholder="Please mention Topic here"/>
      </div>
    ):
    (
      <p></p>
    )
  }
    <br/>
    <div className="form-row">
    <textarea placeholder="message.." cols="50" rows="4" className="form-control"></textarea>
    </div>
    <div className="form-row">
 <button className="btn btnsendcolor text-center btnsend">
 <div  className="sendicon">
 <img width="40" src={send}/>
 </div>
 </button>
    </div>
    <br/>
    </form>
  );
}
