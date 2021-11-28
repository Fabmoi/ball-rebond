
    var gameZone = document.querySelector("#game-zone");        // zone de jeu 
    var ballOne = document.querySelector("#ball-one");          // balle one
    var ballTwo = document.querySelector("#ball-two");          // balle two
    
    var gameZoneW = gameZone.clientWidth;                       // largeur zone jeu sans bordure (500)
    var gameZoneH = gameZone.clientHeight;                      // hauteur zone jeu sans bordure (370)

    var rayonBallOne = ballOne.offsetWidth/2;                   // 7
    var ballOneX = ballOne.offsetLeft - rayonBallOne;           // 236
    var ballOneY = ballOne.offsetTop - rayonBallOne;            // 333
   
    var rayonBallTwo = ballTwo.offsetWidth/2;                   // 7
    var ballTwoX = ballTwo.offsetLeft - rayonBallTwo;           // 236
    var ballTwoY = ballTwo.offsetTop - rayonBallTwo;            // 333

    var dirOneX = 1;                                            // direction horizontale balle one
    var dirOneY = -1;                                           // direction verticale balle one

    var dirTwoX = -1;                                           // direction horizontale balle two
    var dirTwoY = 1;                                            // direction verticale balle two

    var dirBallOneX = ballOneX + dirOneX;                       // 237 si dirOneX = 1 horizontale
    var dirBallOneY = ballOneY + dirOneY;                       // 332 si dirOneY = -1 verticale

    var dirBallTwoX = ballTwoX + dirTwoX;                       // 235 si dirTwoX = -1 horizontale
    var dirBallTwoY = ballTwoY + dirTwoY;                       // 334 si dirTwoY = 1 verticale

    var rayonBallOneTwo = rayonBallOne + rayonBallTwo;          // 14
    var ballOneTwo = ballOne + ballTwo;

    moveBallOne();                                              // chargement fonction moveball balle one
    function moveBallOne() {                                    // fonction moveball balle one
        infoAllBall();                                          // chargement fonction afficher infos balles
        ballOne.style.left = ballTwoX - rayonBallOne + "px";    // direction horizontale balle one
        ballOne.style.top = ballOneY - rayonBallOne + "px";     // direction verticale balle one
        CollisionWithSidesOne();                                // chargement fonction collision avec les côtés
        collisionWithBall();
            ballOneX += dirOneX;                                // position horizontale balle one
            ballOneY += dirOneY;                                // position verticale balle one
            oneTimeID = setTimeout(moveBallOne, 7);             // timer de vitesse balle one
    };
    moveBallTwo();                                              // chargement fonction moveball balle two
    function moveBallTwo() {                                    // fonction moveball balle one
        ballTwo.style.left = ballTwoX - rayonBallTwo + "px";    // direction horizontale balle two
        ballTwo.style.top = ballTwoY - rayonBallTwo + "px";     // direction verticale balle one
        CollisionWithSidesTwo();                                // chargement fonction collision avec les côtés
        collisionWithBall();
            ballTwoX += dirTwoX;                                // position horizontale balle two
            ballTwoY += dirTwoY;                                // position horizontale balle two
            twoTimeID = setTimeout(moveBallTwo, 12);            // timer de vitesse balle two
    }; 

    function CollisionWithSidesTwo() {};                        // déclaration fonction pour les collisions balle two
    function CollisionWithSidesOne() {                          // fonction collision avec les côtés

        dirBallOneX = ballOneX + dirOneX;                       // 237 si dirOneX = 1 horizontale
        dirBallOneY = ballOneY + dirOneY;                       // 332 si dirOneY = -1 verticale

        dirBallTwoX = ballTwoX + dirTwoX;                       // 235 si dirTwoX = -1 horizontale
        dirBallTwoY = ballTwoY + dirTwoY;                       // 334 si dirTwoY = 1 verticale
                                                    // collisions horizontales balle one 
        if (dirBallOneX > gameZoneW - rayonBallOne || dirBallOneX < rayonBallOne) {
            dirOneX = - dirOneX;
        };
                                                    // collisions verticales balle one
        if (dirBallOneY > gameZoneH - rayonBallOne || dirBallOneY < rayonBallOne) {
            dirOneY = - dirOneY;
        };
                                                    // collisions horizontales balle two
        if (dirBallTwoX > gameZoneW - rayonBallTwo || dirBallTwoX < rayonBallTwo) {
            dirTwoX = - dirTwoX;
        };
                                                    // collisions verticales balle two
        if (dirBallTwoY > gameZoneH - rayonBallTwo || dirBallTwoY < rayonBallTwo) {
            dirTwoY = - dirTwoY;
        };
    };

    function infoAllBall() {                                    // fonction afficher infos balles
                                                    
    var positionXBallOne = document.querySelector("#position-X-ball-one");     // sélection id position-X-ball-one 
    var positionYBallOne = document.querySelector("#position-Y-ball-one");     // sélection id position-Y-ball-one 

    var positionXBallTwo = document.querySelector("#position-X-ball-two");     // sélection id position-X-ball-two
    var positionYBallTwo = document.querySelector("#position-Y-ball-two");     // sélection id position-Y-ball-two

        positionXBallOne.innerHTML = ballOneX;                                  // inscritptions position X balle one
        positionYBallOne.innerHTML = ballOneY;                                  // inscritptions position Y balle one
        positionXBallTwo.innerHTML = ballTwoX;                                  // inscritptions position X balle two
        positionYBallTwo.innerHTML = ballTwoY;                                  // inscritptions position Y balle two
    };

    function collisionWithBall() {                              // fonction collision entre balles
        var positionBallOneX = document.querySelector("#position-X-ball-one").innerHTML;     // sélection valeur id position-X-ball-one 
        var positionBallOneY = document.querySelector("#position-Y-ball-one").innerHTML;     // sélection valeur id position-Y-ball-one 

        var positionBallTwoX = document.querySelector("#position-X-ball-two").innerHTML;     // sélection valeur id position-X-ball-two
        var positionBallTwoY = document.querySelector("#position-Y-ball-two").innerHTML;     // sélection valeur id position-Y-ball-two

        var rayonBallOne = ballOne.offsetWidth/2;                               // 7
        var rayonBallTwo = ballTwo.offsetWidth/2;                               // 7

        if (positionBallOneY - rayonBallOneTwo == positionBallTwoY || positionBallOneY + rayonBallOneTwo == positionBallTwoY) {
            dirOneY = - dirOneY;
            dirTwoY = - dirTwoY;
            console.log('pouf-Y', positionBallOneY, positionBallTwoY);
        };
        if (positionBallTwoY - rayonBallOneTwo == positionBallOneY || positionBallTwoY + rayonBallOneTwo == positionBallOneY) {
            dirOneY = - dirOneY;
            dirTwoY = - dirTwoY;
            console.log('pouf-Y', positionBallTwoY, positionBallOneY);
        };
        
    };