import React, { useState } from 'react';
import form from './form.css';
import send from '../../assets/send.png';
import {sendmessage} from './message';

export default function Form() {

const [email,setemail]=useState('');
const [question,setquestion]=useState('');
const [message,setmessage]=useState('');

const submit=(e)=>{
  e.preventDefault();
 var result=sendmessage(email,question,message);
 setemail('');
 setquestion('');
 setmessage('');
 alert("Thanks for contacting us , your message sent succefully");
}

  return (
    <form id="form" className="form-group w-75 justify-content-center form-home" onSubmit={submit}>
    <div className="form-row">
    <input value={email} onChange={e=>setemail(e.target.value)} className="form-control" name="email" type="email"  placeholder="Email"/>
    </div>
    <br/>
    <div className="form-row">
      <input value={question}  onChange={e=>setquestion(e.target.value)} className="form-control" name="question" type='text'  placeholder="your Question"/>
      </div>
    <br/>
    <div className="form-row">
    <textarea value={message}  onChange={e=>setmessage(e.target.value)} name="message" placeholder="message.." cols="50" rows="4" className="form-control"></textarea>
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
