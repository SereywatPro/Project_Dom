const contentel =[
    	{
            photourl: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Hello i am a Web Developer and Moible App Developer I hope I enjoy I hope I can do it I hope I can change it I hope I can good at it I hope I make my mom hapay I hope I am a rich man I hope I become a ....."
            
        },
        {
            photourl: "https://st.depositphotos.com/1400069/4761/i/450/depositphotos_47618741-stock-photo-girl-profile.jpg",
            text: "Hello Sereywat nice to see you !!"
            
        }
        
];
const photo = document.querySelector(".content>.image img");
const des = document.querySelector(".description");
var idex = 0;

testimoninal();

function testimoninal(){
    const {photourl, text} =
    contentel[idex];
    photo.src = photourl;
    des.innerHTML = text;
    idex++;
    if(contentel.length == idex){
        idex=0;
    }
    setTimeout(() => {
        testimoninal();
    }, 3000);
    
}
