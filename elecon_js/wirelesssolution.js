//first
let v1=document.getElementById("divinfo1");
let divinfo1=v1.clientHeight/2;
divinfo1-=divinfo1/2;
let hinfo1=document.getElementById("hinfo1");
let str1=divinfo1+"px";
hinfo1.style.marginTop=str1;
//
let firstpro=document.getElementById("firstpro");
let firstimg=document.getElementById("firstimg");
let fih=firstimg.height;
fih=fih/2;
let strcont1=fih+"px";
firstpro.style.marginTop=strcont1;
//
let introcard1id=document.getElementById("introcard1id");
let temp1=document.getElementById("temp1");
temp1.addEventListener("mouseover",typeWriter1);
var i1 = 0;
var txt1 = ' Nstreme/ Nstreme2 connectivity, Wireless Mesh Network, Infrastructure Monitoring, Wi-Fi – hotspot with user manager, WISP Setup';
function typeWriter1() {
if (i1 < txt1.length) {
document.getElementById("introcard1id").innerHTML+= txt1.charAt(i1);
i1++;
setTimeout(typeWriter1,80);
}
}
let t=2;
let firstbut=document.getElementById("firstbut");
let margincard1=document.getElementById("margincard1");
let firstwatchbut=document.getElementById("firstwatchbut");
let companyextravideo=document.getElementById("companyextravideo");
margincard1.style.display="none";
firstbut.addEventListener("click",myfunc);
function myfunc(){
if(t%2==0){
margincard1.style.display="block";
}
else{
margincard1.style.display="none";
}
t++;
};
let u=2;
companyextravideo.style.display="none";
firstwatchbut.addEventListener("click",myfuncvid);
function myfuncvid(){
if(u%2==0){
companyextravideo.style.display="block";
}
else{
companyextravideo.style.display="none";
}
u++;
};
//second
let v2=document.getElementById("divinfo2");
let divinfo2=v2.clientHeight/2;
divinfo2-=divinfo2/2;
let hinfo2=document.getElementById("hinfo2");
let str2=divinfo2+"px";
hinfo2.style.marginTop=str2;
let secondpro=document.getElementById("secondpro");
let secondimg=document.getElementById("secondimg");
let sih=secondimg.height;
sih=sih/2;
let strcont2=sih+"px";
secondpro.style.marginTop=strcont2;
//
let introcard2id=document.getElementById("introcard2id");
let temp2=document.getElementById("temp2");
temp2.addEventListener("mouseover",typeWriter2);
var i2 = 0;
var txt2 = 'The range of the base station varies upon the antenna gain and radio power. Base stations are providing easy managing capabilities and ease of troubleshooting. Base station setup is offering high throughput ratio to its connected clients.';
function typeWriter2() {
if (i2 < txt2.length) {
document.getElementById("introcard2id").innerHTML+= txt2.charAt(i2);
i2++;
setTimeout(typeWriter2,80);
}
}
let t2=2;
let secondbut=document.getElementById("secondbut");
let margincard2=document.getElementById("margincard2");
let secondwatchbut=document.getElementById("secondwatchbut");
let companyextravideo2=document.getElementById("companyextravideo2");
margincard2.style.display="none";
secondbut.addEventListener("click",myfunc2);
function myfunc2(){
if(t2%2==0){
margincard2.style.display="block";
}
else{
margincard2.style.display="none";
}
t2++;
};
let u2=2;
companyextravideo2.style.display="none";
secondwatchbut.addEventListener("click",myfuncvid2);
function myfuncvid2(){
if(u2%2==0){
companyextravideo2.style.display="block";
}
else{
companyextravideo2.style.display="none";
}
u2++;
};
//end