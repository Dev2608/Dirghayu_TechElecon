let b1=document.getElementById("1");
    let b2=document.getElementById("2");
    let b3=document.getElementById("3");
    let b4=document.getElementById("4");
    let b5=document.getElementById("5");
    let b6=document.getElementById("6");
    let c1=document.getElementById("c1");
    let c2=document.getElementById("c2");
    let c3=document.getElementById("c3");
    let c4=document.getElementById("c4");
    let c5=document.getElementById("c5");
    let c6=document.getElementById("c6");
    let hover=0;
    b1.addEventListener("mouseenter",func);
    function func(){
      b1.className="";
      c1.className="info";
      if(hover==2){
      c1.classList.add("in-right");
      b1.classList.add("in-right");
      }
      if(hover==4){
      c1.classList.add("in-bottom");
      b1.classList.add("in-bottom");
      }
      if(hover==0){
      c1.classList.add("in-left");
      b1.classList.add("in-left");
      }
      if(hover==1){
      c1.classList.add("in-left");
      b1.classList.add("in-left");
      }
    };
    b1.addEventListener("mouseleave",func1);
    function func1(){
      b1.className="";
      c1.className="info";
      c1.classList.add("out-left");
      b1.classList.add("out-left");
      hover=1;
    };
    b2.addEventListener("mouseenter",func2);
    function func2(){
      b2.className="";
      c2.className="info";
      if(hover==1){
      c2.classList.add("in-left");
      b2.classList.add("in-left");
      }
      if(hover==5){
      c2.classList.add("in-bottom");
      b2.classList.add("in-bottom");
      }
      if(hover==3){
      c2.classList.add("in-right");
      b2.classList.add("in-right");
      }
      if(hover==0){
      c2.classList.add("in-top");
      b2.classList.add("in-top");
      }
      if(hover==2){
      c2.classList.add("in-top");
      b2.classList.add("in-top");
      }
    };
    b2.addEventListener("mouseleave",func3);
    function func3(){
      b2.className="";
      c2.className="info";
      c2.classList.add("out-bottom");
      b2.classList.add("out-bottom");
      hover=2;
    };
    b3.addEventListener("mouseenter",func4);
    function func4(){
      b3.className="";
      c3.className="info";
      if(hover==2){
      c3.classList.add("in-left");
      b3.classList.add("in-left");
      }
      if(hover==6){
      c3.classList.add("in-bottom");
      b3.classList.add("in-bottom");
      }
      if(hover==0){
      c3.classList.add("in-right");
      b3.classList.add("in-right");
      }
      if(hover==3){
      c3.classList.add("in-right");
      b3.classList.add("in-right");
      }
    };
    b3.addEventListener("mouseleave",func5);
    function func5(){
      b3.className="";
      c3.className="info";
      c3.classList.add("out-right");
      b3.classList.add("out-right");
      hover=3;
    };
    b4.addEventListener("mouseenter",func6);
    function func6(){
      b4.className="";
      c4.className="info";
      if(hover==1){
      c4.classList.add("in-top");
      b4.classList.add("in-top");
      }
      if(hover==5){
      c4.classList.add("in-right");
      b4.classList.add("in-right");
      }
      if(hover==0){
      c4.classList.add("in-left");
      b4.classList.add("in-left");
      }
      if(hover==4){
      c4.classList.add("in-left");
      b4.classList.add("in-left");
      }
    };
    b4.addEventListener("mouseleave",func7);
    function func7(){
      b4.className="";
      c4.className="info";
      c4.classList.add("out-left");
      b4.classList.add("out-left");
      hover=4;
    };
    b5.addEventListener("mouseenter",func8);
    function func8(){
      b5.className="";
      c5.className="info";
      if(hover==2){
      c5.classList.add("in-top");
      b5.classList.add("in-top");
      }
      if(hover==4){
      c5.classList.add("in-left");
      b5.classList.add("in-left");
      }
      if(hover==6){
      c5.classList.add("in-right");
      b5.classList.add("in-right");
      }
      if(hover==0){
      c5.classList.add("in-bottom");
      b5.classList.add("in-bottom");
      }
      if(hover==5){
      c5.classList.add("in-bottom");
      b5.classList.add("in-bottom");
      }
    };
    b5.addEventListener("mouseleave",func9);
    function func9(){
      b5.className="";
      c5.className="info";
      c5.classList.add("out-bottom");
      b5.classList.add("out-bottom");
      hover=5;
    };
    b6.addEventListener("mouseenter",func10);
    function func10(){
      b6.className="";
      c6.className="info";
      if(hover==3){
      c6.classList.add("in-top");
      b6.classList.add("in-top");
      }
      if(hover==5){
      c6.classList.add("in-left");
      b6.classList.add("in-left");
      }
      if(hover==0){
      c6.classList.add("in-right");
      b6.classList.add("in-right");
      }
      if(hover==6){
      c6.classList.add("in-right");
      b6.classList.add("in-right");
      }
    };
    b6.addEventListener("mouseleave",func11);
    function func11(){
      b6.className="";
      c6.className="info";
      c6.classList.add("out-right");
      b6.classList.add("out-right");
      hover=6;
    };
    let firstpro=document.getElementById("firstpro");
let firstimg=document.getElementById("firstimg");
let fih=firstimg.height;
fih=fih/2;
let str=fih+"px";
firstpro.style.marginTop=str;
//
let secondpro=document.getElementById("secondpro");
let secondimg=document.getElementById("secondimg");
let sih=secondimg.height;
sih=sih/2;
let str2=sih+"px";
secondpro.style.marginTop=str2;
//
let thirdpro=document.getElementById("thirdpro");
let thirdimg=document.getElementById("thirdimg");
let tih=thirdimg.height;
tih=tih/2;
let str3=tih+"px";
thirdpro.style.marginTop=str3;
//
let introcard1id=document.getElementById("introcard1id");
let temp1=document.getElementById("temp1");
temp1.addEventListener("mouseover",typeWriter1);
var i1 = 0;
var txt1 = 'Annual Maintenance Contracts, High Availability Support Services, IT Facility Management Services System, Performance and Tuning.';
function typeWriter1() {
  if (i1 < txt1.length) {
    document.getElementById("introcard1id").innerHTML+= txt1.charAt(i1);
    i1++;
    setTimeout(typeWriter1,80);
  }
}
let introcard2id=document.getElementById("introcard2id");
let temp2=document.getElementById("temp2");
temp2.addEventListener("mouseover",typeWriter2);
var i2 = 0;
var txt2 = 'It Provide ERP, SCM, CRM, Help Desk Management, Workflow Application Development, Resonance (Production Planning & Scheduling).';
function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("introcard2id").innerHTML+= txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2,80);
  }
}
let introcard3id=document.getElementById("introcard3id");
let temp3=document.getElementById("temp3");
temp3.addEventListener("mouseover",typeWriter3);
var i3 = 0;
var txt3 = 'We are providing different kind of wireless solutions, Point to point connectivity, Base Station setup, Nstreme/ Nstreme2 connectivity etc.';
function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("introcard3id").innerHTML+= txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3,80);
  }
}