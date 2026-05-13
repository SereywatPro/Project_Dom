const btnRipple = document.querySelector(".btn");

btnRipple.addEventListener("mouseover", (event)=>{
    var x = event.pageX - btnRipple.offsetLeft;
    var y = event.pageY - btnRipple.offsetTop;

    btnRipple.style.setProperty("--xP", x+"px");
    btnRipple.style.setProperty("--yP", y + "px");

});