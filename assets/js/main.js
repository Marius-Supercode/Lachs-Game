let cat = document.getElementById("cat");

let left = 0;
let direction = "LEFT";
let interval;
let count = 0;
let speed = 80;
let jumpheight = 0;


function catSpeedPlus() {
    speed = speed - 20;
    clearInterval(interval);
    interval = setInterval(walking, speed);
}
function catSpeedMinus() {
    speed = speed + 20;
    clearInterval(interval);
    interval = setInterval(walking, speed);
}

function catWalk() {
    if (count == 0) {
        interval = setInterval(walking, speed);
    }
    count++;
}

function pause() {
    clearInterval(interval);
    count = 0;

}

function jump() {
    jumpheight = jumpheight + 120;
    cat.style.bottom = jumpheight + "px";
    setTimeout(() => {
        jumpheight = jumpheight - 120;
        cat.style.bottom = 0 + "px";
    }, 300);
}


function turn() {
    if (direction === "LEFT") {
        direction = "RIGHT";
        cat.style.transform = "scaleX(1)";
    } else {
        cat.style.transform = "scaleX(-1)";
        direction = "LEFT";
    }
}
function walking() {

    if (direction == "LEFT") {
        if (left + 310 >= window.innerWidth) {
            return;
        } else {
            left += 10;
        }
    } else {
        if (left == 20) {
            return;
        } else {
            left -= 10;

        }
    }
    cat.style.left = left + "px";
}