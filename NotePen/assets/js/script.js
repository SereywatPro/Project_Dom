"use strict";

const btnTakeNote = document.getElementById("takeNote");
const addThings = document.querySelector(".addThings");
const vInput = document.querySelector("#Idea");
let arr = [];
btnTakeNote.addEventListener("click", (event) => {
  event.preventDefault();
  var TxtInput = vInput.value;

  if (TxtInput) {
    arr.push(TxtInput);
    localStorage.setItem("your writing", JSON.stringify(arr));
    createMessage(TxtInput);
    vInput.value = "";
  } else {
    alert("Please Enter Idea");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let getTxtToSave = JSON.parse(localStorage.getItem("your writing"));
  arr = getTxtToSave;
  if (getTxtToSave) {
    getTxtToSave.forEach((note) => createMessage(note));
  }
});

function createMessage(txt) {
  const NewMessage = document.createElement("p");
  NewMessage.classList.add("box-things");
  NewMessage.innerHTML = `${txt}<button class="btn btn-danger">It's Okay😉</button>`;

  addThings.append(NewMessage);

  /* copy element which simple mean all the child elements 
     addThings.prepend(NewMessage.cloneNode(true));*/
  const btnClose = NewMessage.querySelector(".btn-danger");
  btnClose.addEventListener("click", () => {
    NewMessage.remove();
    arr = arr.filter((item) => item !== txt);
    localStorage.setItem("your writing", JSON.stringify(arr));
    //   localStorage.removeItem("your writing");
  });
}
