const containerImg = document.querySelector(".img-container");

let button = document.querySelector(".btn");
button.addEventListener("click", ()=>{
    num =10;
   RandomImg();

});
// const copyimg = document.querySelectorAll(".image");
// copyimg.forEach((item)=>{
//     item.addEventListener("click", ()=>{
//         alert(item.namespaceURI);
//     });
// });

function RandomImg(){
    for(let i =0; i< num; i++){
        let NewImg = document.createElement("img");
            NewImg.src = `https://picsum.photos/300?random=
            ${Math.floor(Math.random()*1000)}`;
        containerImg.appendChild(NewImg);    
        
    }
    
}
