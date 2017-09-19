'use strict'

function getElementPosition(element) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop
    }
}

function setElementPosition(element, xNew, yNew) {
    element.style.left = xNew + 'px';
    element.style.top = yNew + 'px';
}

function changeElementPosition(element, xOffset, yOffset) {
    var xNew = getElementPosition(element).x + xOffset;
    var yNew = getElementPosition(element).y + yOffset;
    setElementPosition(element, xNew, yNew);
}

function moveRight(element, distance) {
    changeElementPosition(element, distance, 0);
}

function moveLeft(element, distance) {
    moveRight(element, -distance);
}

function moveBottom(element, distance) {
    changeElementPosition(element, 0, distance);
}

function moveTop(element, distance) {
    moveBottom(element, -distance);
}

document.addEventListener('keydown', function (event) {
    if (event.code === "ArrowRight") {
        moveRight(div, 50);
    } if (event.code === "ArrowLeft") {
        moveLeft(div, 50);
    } if (event.code === "ArrowUp") {
        moveTop(div, 50);
    } if (event.code === "ArrowDown") {
        moveBottom(div, 50);
    }
});

function animateRight(element) {
    return animate(element, 'right');
}

function animateLeft(element) {
    return animate(element, 'left');
}

function animate(element, direction) {
    var validDirections = ['right', 'left', 'top', 'bottom'];
    if (validDirections.indexOf(direction) === -1)
        throw new Error(
            'Invalid direction! Use one of them: '
            + validDirections.toString()
        );
    var functionName =
        'move' + capitalizeFirstLetter(direction);
    var moveFunction = window[functionName];

    var interval = setInterval(function () {
        moveFunction(element, 5);
        if (isOutOfViewport(element)) {
            clearInterval(interval);
            element.remove();
        }
    }, 40);

    return {
        element: element,
        direction: direction,
        intervalID: interval
    };
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function isOutOfViewport(element) {
//     var position = getElementPosition(element);
//     if (position.x > window.innerWidth)
//         return true;
//     if (position.x < 0 - element.offsetWidth)
//         return true;
//     if (position.y < 0 - element.offsetHeight)
//         return true;
//     if (position.y > window.innerHeight)
//         return true;
//     return false;
}
function isOutOfGameBoard(element) {
    var position = getElementPosition(element);
    if (position.x > board.innerWidth)
        return true;
    if (position.x < - element.offsetWidth)
        return true;
    if (position.y < 0 - element.offsetHeight)
        return true;
    if (position.y > board.innerHeight)
        return true;
    return false;
}


var board = document.querySelector('#moving-bg');
var boardW = Math.round(board.getBoundingClientRect().right);
var boardH = Math.round(board.getBoundingClientRect().bottom);
var offsetFromBottomOfBoard = 250;


function generateDiv1(className){
    var interval;
    if (!className) className = ['hamburger','fries', 'soda'];
    var div = document.createElement('div');
    div.className = 'food-item ';
    div.className += className[Math.floor(Math.random()*className.length)];

    var positionX = boardW;
    var positionY = boardH - div.offsetHeight - offsetFromBottomOfBoard;

    div.style.left = positionX + 'px';
    div.style.top = positionY + 'px';

    board.appendChild(div);

    animateLeft(div);


}


setInterval('generateDiv1()', 6000);

