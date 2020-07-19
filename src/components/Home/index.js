import React from 'react';
import logo from '../../assets/instalogo.svg';
import Form from '../form';
import Section1 from '../section1';
import Section2 from '../section2';
import Section3 from '../section3';
import Section4 from '../section4';

function Home() {

  var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

window.onscroll=()=>{
  var nav = document.getElementById('topnav');
  if(window.pageYOffset>60){
   nav.classList.add("scrolledtop");
}else{
  nav.classList.remove("scrolledtop")
}
var section2 = document.getElementById('section2');
      if(window.pageYOffset>400)
      {
         section2.style.marginLeft="1px";
      }else{
        section2.style.marginLeft="-300px";
      }

      var social = document.getElementsByClassName('socialmedia');
      if(window.pageYOffset>1200)
      {
         social[0].style.height="70px";
         social[0].style.transition="3s";
         social[1].style.transition="3s";
         social[2].style.transition="3s";
         social[1].style.height="70px";
         social[2].style.height="70px";
      }else{
        social[0].style.height="40px";
        social[1].style.height="40px";
        social[2].style.height="40px";
      }
}



  return (
    <div className="App">
      <header className="full-width headerback">
      <nav id="topnav" className="navbar navbar-expand-lg bg-topbar shadow">
      <a className="navbar-brand text-white text-justify" href="#">
       <img src={logo} width="140" height="60" className="d-inline-block align-top px-1" alt="" loading="lazy"/>
       </a>
  <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-list-alt menuleftbtn"></i>
  </button>
  <div className="collapse navbar-collapse w-100" id="navbarNav">
    <ul className="navbar-nav list-nav">
      <li className="nav-item active">
        <a className="nav-link text-white txtfontstyle" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white txtfontstyle" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white txtfontstyle" href="#">Register</a>
      </li>
    </ul>
  </div>
    </nav>
    <br/>
    <div className="row w-100 second-sectionheader">
    <div className="col-md-6 formplace">
    <Form/>
    </div>
<div className="col-md-6 second-header-column">
<h1 className="h1-header"><p className="txtcolorhead">Welcome</p> 
  <span
     class="txt-rotate"
     data-period="2000"
     data-rotate='[" Harry! you found us at last 😬 "," This is the right place.", " Get Real followers", " Up to 50K", " Support for 24/24.", " Let s become friends." , " Contact us Now!" ]'></span>
</h1>
<div className="w-100">

</div>
    </div>
    </div>
    <br/><br/>
      </header>
  <section className="firstsectionback">
  <Section1/>
  </section>
  <br/>
  <section className="secondsectionback">
  <Section2/>
  </section>
  <br/>
  <section className="thirdsectionback">
  <Section3/>
  </section>
  
  <section className="forthsectionback">
  <Section4/>
  </section>
    </div>
  );
}

export default Home;
