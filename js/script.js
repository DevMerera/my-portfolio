
const text="First-Year Student | Learning HTML, CSS & C++";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// Animate Skill Bars

window.onload=function(){

document.querySelector(".html").style.width="40%";

document.querySelector(".css").style.width="25%";

document.querySelector(".cpp").style.width="55%";

document.querySelector(".problem").style.width="60%";

};


// Scroll Button

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};