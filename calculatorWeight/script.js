"use strict"


const inputEl = document.querySelectorAll("input");
const iHeight = document.querySelector(".input-height");
const iWeight = document.querySelector('.input-weight');
const getBMICategory = document.querySelector(".txt-bmi-category");


function calcBMI() {
  const heightValue = parseFloat(iHeight.value); 
  const weightValue = parseFloat(iWeight.value);

  if (!heightValue || !weightValue) return; 

  const heightInMeters = heightValue / 100;
  const bmi = weightValue / (heightInMeters * heightInMeters);

  getBMICategory.innerText = `Your BMI is ${bmi.toFixed(2)}`;
}

