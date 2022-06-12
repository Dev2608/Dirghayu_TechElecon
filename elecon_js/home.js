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