// let x=document.getElementById("dir");
// let y=document.getElementById("navbarSupportedContent");
// let z=document.getElementById("meg");
// let count=2;
// x.addEventListener('click',myfunc);
// function myfunc(){
//   x.style.boxShadow="none";
//   if(count%2==0){
// y.style.display="block";
// z.style.border="0.5px groove rgb(0, 247, 226,0.5)";
// z.style.boxShadow="0px 0px 30px 2px rgb(0, 247, 226)";
// count++;
// }
// else{
//        y.style.display="none";
//        z.style.border="none";
//        z.style.boxShadow="none";
//        count++;
// }
// };
// let lidir1=document.getElementById("lidir1");
// let lidir2=document.getElementById("lidir2");
// let uldir1=document.getElementById("uldir1");
// let uldir2=document.getElementById("uldir2");
// lidir1.addEventListener('mouseenter',func);
// function func(){
//   uldir1.style.display="block";
// };
// lidir1.addEventListener('mouseleave',func1);
// function func1(){
//    uldir1.style.display="none";
// };
// lidir2.addEventListener('mouseenter',func2);
// function func2(){
//   uldir2.style.display="block";
// };
// lidir2.addEventListener('mouseleave',func3);
// function func3(){
//    uldir2.style.display="none";
// };
let countable=document.getElementById("countablediv");
let proavailabel=document.getElementById("availabelpro");
let proprocess=document.getElementById("processpro");
let proupcoming=document.getElementById("upcomingpro");
let countavailabel=document.getElementById("availabelcount");
let countprocess=document.getElementById("processcount");
let countupcoming=document.getElementById("upcomingcount");
let cont=document.getElementById("cont");
var coordinate= cont.getBoundingClientRect();
//530
console.log(coordinate.x);
console.log(coordinate.y);
window.addEventListener("scroll",myFunction);
function myFunction(){
  if(document.body.scrollTop>=coordinate.y||document.documentElement.scrollTop>=coordinate.y){
  proavailabel.style.display="block";
  proprocess.style.display="block";
  proupcoming.style.display="block";
  proavailabel.className="abc";
  proprocess.className="abc";
  proupcoming.className="abc";
  countavailabel.className="abc";
  countprocess.className="abc";
  countupcoming.className="abc";
  countavailabel.style.display="block";
  countprocess.style.display="block";
  countupcoming.style.display="block";
  }
};
  let intial=0;
counts=setInterval(countfun,1200);
function countfun(){
  countavailabel.innerHTML=++intial;
  if(intial===2){
    clearInterval(counts);
  }
};
let intial2=0;
counts2=setInterval(countfun2,1200);
function countfun2(){
  countprocess.innerHTML=++intial2;
  if(intial2===5){
    clearInterval(counts2);
  }
};
let intial3=0;
counts3=setInterval(countfun3,1200);
function countfun3(){
  countupcoming.innerHTML=++intial3;
  if(intial3===7){
    clearInterval(counts3);
    }
  };
let firstpro=document.getElementById("firstpro");
let firstimg=document.getElementById("firstimg");
let fih=firstimg.height;
fih=fih/2;
let str=fih+"px";
console.log(str);
firstpro.style.marginTop=str;
let secondpro=document.getElementById("secondpro");
let secondimg=document.getElementById("secondimg");
let sih=secondimg.height;
sih=sih/2;
let str2=sih+"px";
secondpro.style.marginTop=str2;
let thirdpro=document.getElementById("thirdpro");
let thirdimg=document.getElementById("thirdimg");
let tih=thirdimg.height;
tih=tih/2;
let str3=tih+"px";
thirdpro.style.marginTop=str3;
let f=window.innerHeight;
let g=window.innerWidth;
let result=g/f;
console.log(result);
if(result>0.1&&result<=0.5){
   countable.style.top="-130px";
}
if(result>0.5&&result<1){
  countable.style.top="-190px";
}
if(result>1.0&&result<1.65){
  countable.style.top="-270px";
}
if(result>1.0&&result<2.40){
  countable.style.top="-360px";
}
if(result>=2.40){
  countable.style.top="-580px";
}