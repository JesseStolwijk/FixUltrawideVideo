
document.body.style.border = "5px solid red";
var vids = document.getElementsByTagName('video')
var video = vids[0];
console.log("DOM loaded");
var fullscreen = window.innerHeight == window.screen.height && window.innerWidth == window.screen.width;
document.addEventListener("mozfullscreenchange", function( event ) {
    fullscreen = window.innerHeight == window.screen.height && window.innerWidth == window.screen.width;
    console.log("fullscreenchangeevenmt!!!");    
    if (fullscreen) {
        console.log("Fullscreen");
        video.style.width = "2560px";
        video.style.left = 0;
        video.style.height = "1440px";
        video.style.top = "-180px";
    } else {
        video.style.border = "";
    }
});
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.drawImage(video,0,0,256,256);  
document.body.appendChild(canvas); 
//
//video.style.left = 0;
//video.style.top = -100+"px";

console.log("Jesse: " + document.body.clientWidth);
