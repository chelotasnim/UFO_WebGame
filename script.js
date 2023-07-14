const frontTitle = document.querySelector('.Title');
const backTitle = document.querySelector('.Back-Title');

setInterval(
    hideFront,
2000);

function hideFront() {
    frontTitle.classList.toggle("Hide");
    backTitle.classList.toggle("Active");
};

const plane = document.querySelector('.Plane');
const missile1 = document.querySelector('.Top-Missile');
const missile2 = document.querySelector('.Mid-Missile');
const missile3 = document.querySelector('.Bottom-Missile');
const menu = document.querySelector('.Menu');
const over = document.querySelector('.Game-Over');
const score = document.querySelector('.Score h5');
    
let scoreInterval = null
let count = 0;
    
let countScore = ()=> {
    count++;
    score.innerHTML = `Score : ${count}`;
};

window.addEventListener(
    'keydown', event => {
        if ( event.keyCode == 32 ) {
            plane.style.top = '100px';
            plane.classList.remove("Hit");
            menu.classList.add("Hide");
            over.classList.remove("Active");
            missile1.classList.add("Run");
            missile2.classList.add("Run");
            missile3.classList.add("Run");
            count = 0;
            scoreInterval = setInterval(
                countScore, 50
            );
            play();
        }
    }
);

window.addEventListener(
    'keydown', event => {
        if (event.keyCode == 38) {
            var topVal = parseInt(plane.style.top, 10);
            plane.style.top = (topVal - 75) + "px";
        }
        if (event.keyCode == 40) {
            var topVal = parseInt(plane.style.top, 10);
            plane.style.top = (topVal + 75) + "px";
        }
    }
);

function play() {
    let result = setInterval(
        () => {
            let planeTop = parseInt(getComputedStyle(plane).getPropertyValue("top"));
            let missile1Left = parseInt(getComputedStyle(missile1).getPropertyValue("left"));
            let missile2Left = parseInt(getComputedStyle(missile2).getPropertyValue("left"));
            let missile3Left = parseInt(getComputedStyle(missile3).getPropertyValue("left"));
            if (planeTop <= 50 && planeTop >= -1000 && missile1Left >= 0 && missile1Left <= 125 ||
                planeTop <= 125 && planeTop >= 100 && missile2Left >= 0 && missile2Left <= 125 ||
                planeTop <= 1000 && planeTop >= 175 && missile3Left >= 0 && missile3Left <= 125) {
                plane.classList.add("Hit");
                missile1.classList.remove("Run");
                missile2.classList.remove("Run");
                missile3.classList.remove("Run");
                over.classList.add("Active");
                clearInterval(scoreInterval);
            }
        }, 10
    );

    window.addEventListener(
        'keydown', event => {
            if (event.keyCode == 32) {
                document.location.reload();
            };
        }
    );
};

setInterval(
    ufoStyle, 100
);

function ufoStyle() {
    plane.classList.toggle("Ufo-Style");
}