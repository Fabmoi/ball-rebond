var gameZone = document.querySelector("#game-zone");
var ballEight = document.querySelector("#ball-eight");

var gameZoneW = gameZone.clientWidth; 
var gameZoneH = gameZone.clientHeight;

var rayonBallEight = ballEight.offsetWidth/2;
var ballEightX = ballEight.offsetLeft - rayonBallEight;
var ballEightY = ballEight.offsetTop - rayonBallEight;

var dx = 1;
var dy = -1;

var timeID;

moveBallEight();
function moveBallEight() {
    ballEight.style.left = ballEightX - rayonBallEight + "px";
    ballEight.style.top = ballEightY - rayonBallEight + "px";
afficheInfos()
detectCollisionWithSides();
    ballEightX += dx;
    ballEightY += dy;
    timeID = setTimeout(moveBallEight, 5);
};

function detectCollisionWithSidesEight() {
    if (ballEightX + dx > gameZoneW - rayonBallEight || ballEightX + dx < rayonBallEight) {
        dx = -dx;
    };
    if (ballEightY + dy > gameZoneH - rayonBallEight || ballEightY + dy < rayonBallEight) {
        dy = -dy;
    };
};
function afficheInfosEight() {
var infoBallEight = document.querySelector("#info-ball-eight");  
var str = "ballEightX : " + ballEightX +
            " ballEightY : " + ballEightY +
            "<br>gameZoneW : " + gameZoneW +
            " - gameZoneH : " + gameZoneH  ;
            infoBallEight.innerHTML = str;
};