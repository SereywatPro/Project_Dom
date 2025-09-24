"use strict"

const NewMessage = document.createElement('div');
const btnTakeNote = document.getElementById('takeNote');
const addThings = document.querySelector(".addThings");
const vInput = document.querySelector('#Idea');

btnTakeNote.addEventListener('click', (event) => {
    event.preventDefault();
    let TxtInput = vInput.value;

    NewMessage.innerHTML += `<p class="box-things">${TxtInput}<button class="btn btn-danger">It's Okay😉</button></p>`;
    
    /* modern step to modify element in DOM html */
    addThings.append(NewMessage);

    /* copy element which simple mean all the child elements */
    // addThings.prepend(NewMessage.cloneNode(true));
    const btnClose = document.querySelector(".btn-danger");

    btnClose.addEventListener('click', () => {
        NewMessage.remove();
    });
});