'use strict';

//animated player's avatar //
//running//

var img = document.getElementById("img");
var images = ['git pull' +
'pic1','pic2','pic3','pic4','pic5'];
var currentIteration = 0;

function initAnimation(){
    animate();
}

function animate(){
    if(currentIteration < image.length){
        window.setTimeout(
            function(){transition()}
            ,800)
    }
}

function transition(){
    images[currentIteration].transitionTo({
        opacity: 1,
        duration: 0
    });
    currentIteration++;
    animate();
}

//
//
//
// var div = document.querySelector ('div');
// var divX = 0;
// var divY = 0;
// var step = 50;
//
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor ='red';
// div.style.borderRadius = '20px';
// div.style.transitionDuration = '.5s';
//
// div.style.position = 'fixed';
// div.style.top = divY + 'px';
// div.style.left = divX + 'px';
//
// function setElementPosition(){
//     div.style.top = divY+ 'px';
//     div.style.left = divX + 'px';
// }
//
// function changePosition (x,y) {
//     divX = divX +x;
//     divY = divY +y;
// }
//
// function moveRight (distance){
//     changePosition(distance, 0);
//     setElementPosition();
// }
//
// function moveLeft(distance) {
//     moveRight (-distance);
// }
//
// document.addEventListener('keydown', function(event){
//     if(event.code === "ArrowRight") {
//         moveRight(50);
//     }if(event.code === "ArrowLeft"){
//         moveLeft(50);
//     }
// });

///
setInterval()
setTimeout()
///