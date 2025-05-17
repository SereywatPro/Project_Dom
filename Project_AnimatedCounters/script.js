"use strict"

const numEl = document.querySelectorAll(".number");


function AnimatedCounterNumber() {
    
    numEl.forEach(el => {
      let incr = 0;
      const dataCounter = +el.getAttribute("data-counter");
      // debugger;
      let timSp = Math.ceil(dataCounter / 20); // Math.ceil() Always rounds up to the next whole number, no matter what the decimal is.
      function exeCounter() {
        if (incr < dataCounter) {
          incr += timSp;
          el.innerText = incr;
          setTimeout(exeCounter, 50);
        } else {
          el.innerHTML = dataCounter;
        }
      }
      exeCounter();
    });
}
AnimatedCounterNumber();