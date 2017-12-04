
document.body.style.border = "5px solid red";
var vids = document.getElementsByTagName('video')
console.log(vids.length);
var video = vids[0];
console.log("DOM loaded");
var fullscreen = window.innerHeight == window.screen.height && window.innerWidth == window.screen.width;
document.addEventListener("mozfullscreenchange", function( event ) {
    fullscreen = window.innerHeight == window.screen.height && window.innerWidth == window.screen.width;
    console.log("fullscreenchangeevenmt!!!");   
    setTimeout(function(){
        if (fullscreen||window.fullScreen) {
            console.log("Fullscreen");
            video.style.width = window.screen.width + "px";
            video.style.left = 0;
            video.style.height = window.screen.width / 16 * 9 + "px";
            video.style.top = (window.screen.height - window.screen.width / 16 * 9) / 2 + "px";
        } else {
            video.style = "";
        }    }, 200);
    
});
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.drawImage(video,0,0,256,256);  
document.body.appendChild(canvas); 
//
//video.style.left = 0;
//video.style.top = -100+"px";

console.log("Jesse: " + document.body.clientWidth);
