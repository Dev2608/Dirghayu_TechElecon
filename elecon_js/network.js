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
var txt1 = 'Supports 10/100 Mbps Auto-negotiation for UTP port, Fiber cabling connectivity up to 60Km, Uses store-and-forward switching to separatecollision domains, One fiber connector (SC/Single Mode, SC orST/Multi-Mode) for 100Base-FXPrevents packet loss by supporting backpressure& flow control.';
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
var txt2 = 'NEXT (Min. at 100 MHz)	44.3 dB, PS-NEXT (Min. at 100 MHz)	42.3 dB, ELFEXT (Min. at 100 MHz)	27.8 dB, PS-ELFEXT (Min. at 100 MHz) 24.8 dB, Return Loss (Min. at 100 MHz)	20.1 dB, Delay Skew (Max. per 100 m)45 ns.';
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
//third
let v3=document.getElementById("divinfo3");
let divinfo3=v3.clientHeight/2;
divinfo3-=divinfo3/2;
let hinfo3=document.getElementById("hinfo3");
let str3=divinfo3+"px";
hinfo3.style.marginTop=str3;
//
let thirdpro=document.getElementById("thirdpro");
let thirdimg=document.getElementById("thirdimg");
let tih=thirdimg.height;
tih=tih/2;
let strcont3=tih+"px";
thirdpro.style.marginTop=strcont3;
//
let introcard3id=document.getElementById("introcard3id");
let temp3=document.getElementById("temp3");
temp3.addEventListener("mouseover",typeWriter3);
var i3 = 0;
var txt3 = 'NEXT (Min. at 100 MHz)	44.3 dB, PS-NEXT (Min. at 100 MHz)	42.3 dB, ELFEXT (Min. at 100 MHz)	27.8 dB, PS-ELFEXT (Min. at 100 MHz) 24.8 dB, Return Loss (Min. at 100 MHz)	20.1 dB, Delay Skew (Max. per 100 m) 45 ns';
function typeWriter3() {
if (i3 < txt3.length) {
document.getElementById("introcard3id").innerHTML+= txt3.charAt(i3);
i3++;
setTimeout(typeWriter3,80);
}
}
let t3=2;
let thirdbut=document.getElementById("thirdbut");
let margincard3=document.getElementById("margincard3");
let thirdwatchbut=document.getElementById("thirdwatchbut");
let companyextravideo3=document.getElementById("companyextravideo3");
margincard3.style.display="none";
thirdbut.addEventListener("click",myfunc3);
function myfunc3(){
if(t3%2==0){
margincard3.style.display="block";
}
else{
margincard3.style.display="none";
}
t3++;
};
let u3=2;
companyextravideo3.style.display="none";
thirdwatchbut.addEventListener("click",myfuncvid3);
function myfuncvid3(){
if(u3%2==0){
companyextravideo3.style.display="block";
}
else{
companyextravideo3.style.display="none";
}
u3++;
};
//fourth
let v4=document.getElementById("divinfo4");
let divinfo4=v4.clientHeight/2;
divinfo4-=divinfo4/2;
let hinfo4=document.getElementById("hinfo4");
let str4=divinfo4+"px";
hinfo4.style.marginTop=str4;
let fourthpro=document.getElementById("fourthpro");
let fourthimg=document.getElementById("fourthimg");
let foih=fourthimg.height;
foih=foih/2;
let strcont4=foih+"px";
fourthpro.style.marginTop=strcont4;
//
let introcard4id=document.getElementById("introcard4id");
let temp4=document.getElementById("temp4");
temp4.addEventListener("mouseover",typeWriter4);
var i4 = 0;
var txt4 = 'Maximum tensile load 100 N/cm, Loaded min. bend radius 5cm, Unloaded min. bend radius 3cm, Crush resistance 750 N/cm, Impact resistance 1000 cycles, Flex resistance 7500 cycles';
function typeWriter4() {
if (i4 < txt4.length) {
document.getElementById("introcard4id").innerHTML+= txt4.charAt(i4);
i4++;
setTimeout(typeWriter4,80);
}
}
let t4=2;
let fourthbut=document.getElementById("fourthbut");
let margincard4=document.getElementById("margincard4");
let fourthwatchbut=document.getElementById("fourthwatchbut");
let companyextravideo4=document.getElementById("companyextravideo4");
margincard4.style.display="none";
fourthbut.addEventListener("click",myfunc4);
function myfunc4(){
if(t4%2==0){
margincard4.style.display="block";
}
else{
margincard4.style.display="none";
}
t4++;
};
let u4=2;
companyextravideo4.style.display="none";
fourthwatchbut.addEventListener("click",myfuncvid4);
function myfuncvid4(){
if(u4%2==0){
companyextravideo4.style.display="block";
}
else{
companyextravideo4.style.display="none";
}
u4++;
};
//fifth
let v5=document.getElementById("divinfo5");
let divinfo5=v5.clientHeight/2;
divinfo5-=divinfo5/2;
let hinfo5=document.getElementById("hinfo5");
let str5=divinfo5+"px";
hinfo5.style.marginTop=str5;
//
let fifthpro=document.getElementById("fifthpro");
let fifthimg=document.getElementById("fifthimg");
let fiih=fifthimg.height;
fiih=fiih/2;
let strcont5=fiih+"px";
fifthpro.style.marginTop=strcont5;
//
let introcard5id=document.getElementById("introcard5id");
let temp5=document.getElementById("temp5");
temp5.addEventListener("mouseover",typeWriter5);
var i5 = 0;
var txt5 = 'Connects any CAT5 or CAT6 application such as computer to hub, patch panel or wall jack. This PVC stranded patch cord meets TIA/EIA 568A specifications, and support all CAT5 & CAT6 high speed applications such as 1Gig and 10GigEthernet.';
function typeWriter5() {
if (i5 < txt5.length) {
document.getElementById("introcard5id").innerHTML+= txt5.charAt(i5);
i5++;
setTimeout(typeWriter5,80);
}
}
let t5=2;
let fifthbut=document.getElementById("fifthbut");
let margincard5=document.getElementById("margincard5");
let fifthwatchbut=document.getElementById("fifthwatchbut");
let companyextravideo5=document.getElementById("companyextravideo5");
margincard5.style.display="none";
fifthbut.addEventListener("click",myfunc5);
function myfunc5(){
if(t5%2==0){
margincard5.style.display="block";
}
else{
margincard5.style.display="none";
}
t5++;
};
let u5=2;
companyextravideo5.style.display="none";
fifthwatchbut.addEventListener("click",myfuncvid5);
function myfuncvid5(){
if(u5%2==0){
companyextravideo5.style.display="block";
}
else{
companyextravideo5.style.display="none";
}
u5++;
}
//end