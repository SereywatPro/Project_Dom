const getEachNumber = document.querySelectorAll(`span`);

setInterval(() => {
  let nowDate = new Date();
  let hor = nowDate.getHours();
  let min = nowDate.getMinutes();
  let sec = nowDate.getSeconds();
  getEachNumber[0].innerText = (hor < 10 ? "0" : "") + nowDate.getHours();
  getEachNumber[1].innerText = (min < 10 ? "0" : "") + nowDate.getMinutes();
    getEachNumber[2].innerText = (sec < 10 ? "0" : "") + nowDate.getSeconds();
}, 1000);

