let back=document.querySelector("#back");
back.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
back.addEventListener("click",()=>{
    history.forward();
})
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    location.href="./skills.html";
})
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    location.href="./index.html";
})
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    location.href="./contact.html";
})