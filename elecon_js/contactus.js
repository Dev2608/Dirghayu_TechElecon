let but1=document.getElementById("but1");
let cardp1=document.getElementById("cardp1");
let butt1=2;
but1.addEventListener("click",myfunc);
function myfunc(){
 if(butt1%2==0){
  cardp1.style.display="block";
  but1.innerHTML="&#9650;";
 }
 else{
    cardp1.style.display="none";
    but1.innerHTML="&#9660;";
 }
 butt1++;
};
let but2=document.getElementById("but2");
let cardp2=document.getElementById("cardp2");
let butt2=2;
but2.addEventListener("click",myfunc2);
function myfunc2(){
 if(butt2%2==0){
  cardp2.style.display="block";
  but2.innerHTML="&#9650;";
 }
 else{
    cardp2.style.display="none";
    but2.innerHTML="&#9660;";
 }
 butt2++;
};
let but3=document.getElementById("but3");
let cardp3=document.getElementById("cardp3");
let butt3=2;
but3.addEventListener("click",myfunc3);
function myfunc3(){
 if(butt3%2==0){
  cardp3.style.display="block";
  but3.innerHTML="&#9650;";
 }
 else{
    cardp3.style.display="none";
    but3.innerHTML="&#9660;";
 }
 butt3++;
};
let but4=document.getElementById("but4");
let cardp4=document.getElementById("cardp4");
let butt4=2;
but4.addEventListener("click",myfunc4);
function myfunc4(){
 if(butt4%2==0){
  cardp4.style.display="block";
  but4.innerHTML="&#9650;";
 }
 else{
    cardp4.style.display="none";
    but4.innerHTML="&#9660;";
 }
 butt4++;
};
let companyextravideo=document.getElementById("companyextravideo");
let butvid=document.getElementById("butvid");
let butt5=2;
butvid.addEventListener("click",myfunc5);
function myfunc5(){
 if(butt5%2==0){
  companyextravideo.style.display="block";
 }
 else{
    companyextravideo.style.display="none";
 }
 butt5++;
};