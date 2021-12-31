
const count=document.getElementById("count")
const addcount = document.getElementById("btn1");
const lowercount = document.getElementById("btn2");
const reset = document.getElementById("btn3");

const num =document.querySelector('.num');

let add=0;
addcount.addEventListener('click', () => {
     add +=1;
    num.innerHTML= add; 
    });


lowercount.addEventListener('click', () => {
    add -=1
    num.innerHTML=add;   
    });

    reset.addEventListener('click', () => {
        add =0;
        num.innerHTML=add;   
        });
