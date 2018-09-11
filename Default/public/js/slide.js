/* Javascript */

document.querySelector(".btns--prev").addEventListener("click", imgPrev);
document.querySelector(".btns--next").addEventListener("click", imgNext);
document.querySelector(".btns--pause").addEventListener("click", imgPause);

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        imgNext();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        imgPrev();
    }
});

var imgArr = [
    "img/stage1.jpg",
    "img/stage2.jpg",
    "img/stage3.jpg",
];

var index = 0;
var pause = true;
var imgRun = setInterval(switchImg, 2000);

function switchImg() {
    document.querySelector(".slide__img").src = imgArr[index];
    index < imgArr.length-1 ? index++ : index = 0;
    console.log(index);
}

switchImg();

function imgNext() {
    clearInterval(imgRun);
    index++;
    if (index > imgArr.length-1) {
        index = 0;
    }
    document.querySelector(".slide__img").src = imgArr[index];
    pause = false;
    console.log(index);
}

function imgPrev() {
    clearInterval(imgRun);
    index = index - 1;
    if (index < 0) {
        index = 2;
    }
    document.querySelector(".slide__img").src = imgArr[index];
    pause = false;
    console.log(index);
}

function imgPause() {
    if (pause) {
        pause = false;
        clearInterval(imgRun);
    } else {
        pause = true;
        imgRun = setInterval(switchImg, 2000);
    }
}