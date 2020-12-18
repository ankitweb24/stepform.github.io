let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');

let next1  = document.getElementById('next1');
let next2  = document.getElementById('next2');
let back1  = document.getElementById('back1');
let back2  = document.getElementById('back2');


let slider2 = document.querySelector('.slider2');
let slider3 = document.querySelector('.slider3');
// console.log(slider2);

next1.addEventListener('click', ()=>{
    form1.style.left = '-400px';
    form2.style.left = '0px';
    slider2.className = 'activate';
})

back1.addEventListener('click', ()=>{
    form1.style.left = '0px';
    form2.style.left = '400px';
    slider2.classList.remove('activate');
})

next2.addEventListener('click', ()=>{
    form3.style.left = '0px';
    form2.style.left = '-400px';
    slider3.className = 'activate';
})

back2.addEventListener('click', ()=>{
    form2.style.left = '0px';
    form3.style.left = '400px';
    slider3.classList.remove('activate');
})
