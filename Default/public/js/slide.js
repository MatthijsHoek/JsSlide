/* Javascript */

document.addEventListener('keydown', event => {
    if (event.keyCode == 37) {
        imgNext();
    }
});

document.addEventListener('keydown', event => {
    if (event.keyCode == 39) {
        imgPrev();
    }
});

let imgArr = [
    "img/stage1.jpg",
    "img/stage2.jpg",
    "img/stage3.jpg",
];

let index = 0;
let pause = true;

const switchImg = () => {
    document.querySelector(".slide__img").src = imgArr[index];
    index < imgArr.length-1 ? index++ : index = 0;
    //  index = (index+1) % imgArr.length;
    console.log(index);
}

let imgRun = setInterval(switchImg, 2000);

switchImg();

const imgNext = () => {
    clearInterval(imgRun);
    index++;
    if (index > imgArr.length-1) {
        index = 0;
    }
    document.querySelector(".slide__img").src = imgArr[index];
    pause = false;
    console.log(index);
}

const imgPrev = () => {
    clearInterval(imgRun);
    index = index - 1;
    if (index < 0) {
        index = 2;
    }
    document.querySelector(".slide__img").src = imgArr[index];
    pause = false;
    console.log(index);
}

const imgPause = () => {
    if (pause) {
        pause = false;
        clearInterval(imgRun);
    } else {
        pause = true;
        imgRun = setInterval(switchImg, 2000);
    }
}

document.querySelector(".btns--prev").addEventListener("click", imgPrev);
document.querySelector(".btns--next").addEventListener("click", imgNext);
document.querySelector(".btns--pause").addEventListener("click", imgPause);