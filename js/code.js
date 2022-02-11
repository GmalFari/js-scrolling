let btn = document.querySelector("button");
btn.style = `
background-color: red;
padding: 31px;
width: 15px;
height: 15px;
border-radius: 5px;
color: white;
font-weight: bold;
font-size: 20px;
position: fixed;
bottom: 10px;
right: 20px;
border:none;
display:none;
cursor:pointer`;

window.onscroll = function(){
    if (window.scrollY >= 600){
        btn.style.display = "block";
    }else if(window.scrollY <=600){
        btn.style.display ="none";
    }
};


btn.onclick = function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}