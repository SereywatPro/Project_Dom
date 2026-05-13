const bodye1 = document.querySelector("body");

bodye1.addEventListener("mousemove", (e)=>{
    const xleft = e.offsetX;
    const ytop = e.offsetY;
    const spanE = document.createElement("span");
    spanE.style.left = xleft+ "px";
    spanE.style.top = ytop + "px";
    const size = Math.random()*100;
    spanE.style.width = size + "px";
    spanE.style.height = size + "px";
    bodye1.appendChild(spanE);
    setTimeout(()=>{
        spanE.remove();
    }, 2000)
});