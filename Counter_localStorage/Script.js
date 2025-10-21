'use strict'

const getBtnPrevious = document.getElementById('btn-previous');
const getBtnNext = document.getElementById('btn-next');
const getNumCount = document.getElementById('num-count');


let tol = parseInt(localStorage.getItem('count')) || 0;

getNumCount.innerText = tol;

function btnPrev() {
    if (tol <= 0) return;  
    tol -= 1;
    localStorage.setItem("count", tol);
    getNumCount.innerText = tol;
    document.body.style.backgroundColor = `#${tol * 1000 - parseInt("0000")}`;
}   

function btnNext() { 
    // if (tol >= 10) return; 
    tol += 1;   
    localStorage.setItem("count", tol);
    getNumCount.innerText = tol;
    
    document.body.style.backgroundColor = `#${tol * 1000 + parseInt("0000")}`;
}
function reset() {
    tol = 0;
    localStorage.setItem('count', tol);
    getNumCount.innerText = tol;
    document.body.style.backgroundColor = `#fff`;

  }

