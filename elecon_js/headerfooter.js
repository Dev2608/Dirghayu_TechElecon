let x=document.getElementById("dir");
let y=document.getElementById("navbarSupportedContent");
let z=document.getElementById("meg");
let count=2;
x.addEventListener('click',myfunc);
function myfunc(){
  x.style.boxShadow="none";
  if(count%2==0){
y.style.display="block";
z.style.border="0.5px groove rgb(0, 247, 226,0.5)";
z.style.boxShadow="0px 0px 30px 2px rgb(0, 247, 226)";
count++;
}
else{
       y.style.display="none";
       z.style.border="none";
       z.style.boxShadow="none";
       count++;
}
};
let lidir1=document.getElementById("lidir1");
let lidir2=document.getElementById("lidir2");
let uldir1=document.getElementById("uldir1");
let uldir2=document.getElementById("uldir2");
lidir1.addEventListener('mouseenter',func);
function func(){
  uldir1.style.display="block";
};
lidir1.addEventListener('mouseleave',func1);
function func1(){
   uldir1.style.display="none";
};
lidir2.addEventListener('mouseenter',func2);
function func2(){
  uldir2.style.display="block";
};
lidir2.addEventListener('mouseleave',func3);
function func3(){
   uldir2.style.display="none";
};