const monthN = document.getElementById("month-name");
const day = document.getElementById("day-name");
const daynum = document.getElementById("day-number");
const year = document.getElementById("year");
const time = document.getElementById("time");

const date = new Date();

const month = date.getMonth();
monthN.innerHTML = date.toLocaleString("In", {
    month: "long"
});

day.innerHTML = date.toLocaleString("In", {
    weekday: "long"
});
daynum.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();

function iteration() {
    time.innerHTML = new Date();
}
setInterval(iteration, 100);