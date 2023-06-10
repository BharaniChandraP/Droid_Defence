// // Game settings
// const WIDTH = 800;  // Width of the game window
// const HEIGHT = 600;  // Height of the game window
// const PLAYER_SPEED = 5;  // Speed of player movement
// const BULLET_SPEED = 8;  // Speed of bullets
// const BOT_SPEED = 2;  // Speed of bots

// // Game variables
// let canvas, ctx;
// let playerX, playerY;
// let bullets;
// let bots;
// let baseHealth;
// let playerHealth;
// let score;
// let leftPressed = false;
// let rightPressed = false;
// //let spacePressed = false;
// let apressed = false;
// let dpressed = false;
// let wpressed = false;
// let spressed = false;
// let upPressed = false;
// let downPressed = false;
// //powerup
// let powerUps = [];
// //Audios
// const bulletSound = new Audio("music/bulletSound.mp3");
// const musicSound = new Audio("music/music.mp3");
// const gameOverSound = new Audio("music/gameOver.mp3");
// //playerbot
// let player2X = Math.random() * WIDTH;  // Set initial random position for player 2
// let player2Y = Math.random() * HEIGHT;

// // Initialize the game
// function init() {
//     canvas = document.getElementById("gameCanvas");
//     ctx = canvas.getContext("2d");

//     canvas.width = WIDTH;
//     canvas.height = HEIGHT;

//     playerX = WIDTH / 2;  // Set initial player position to the middle of the screen
//     playerY = HEIGHT/2;
//     bullets = [];
//     bots = [];
//     baseHealth = 10;
//     playerHealth = 10;
//     score = 0;

//     // Event listeners for player movement to move player in all directions
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("keyup", handleKeyUp);
    

//     // Start the game loop
//     setInterval(gameLoop, 16);  // Run the game loop approximately 60 times per second
// }
// class Bot {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.speed = BOT_SPEED;
//       this.health = 5;
//     }
// }

// // Game loop
// function gameLoop() {
//     update();
//     draw();
//     updatePowerUps();
// }

//     //powerup function 
// function updatePowerUps() {
//     // Move power-ups
//     powerUps.forEach((powerUp, index) => {
//         //powerUp.y += BOT_SPEED;

//         // Check for power-up-player collisions
//         if (isColliding(powerUp, { x: playerX, y: playerY })) {
//             applyPowerUpEffects(powerUp);
//             powerUps.splice(index, 1);
//         }

//         // Remove power-up if it goes off-screen
//         if (powerUp.y >= HEIGHT) {
//             powerUps.splice(index, 1);
//         }
//     });
//     // Create new power-up randomly
//     if (powerUps.length === 0) {
//         if (Math.random() < 0.01) {
//             const powerUpX = Math.random() * WIDTH;
//             const powerUpY = Math.random() * HEIGHT;
//             powerUps.push({ x: powerUpX, y: powerUpY });
//         }
//     }
// }


//     //function for Powerup
// function applyPowerUpEffects(powerUp) {
//     // Increase player health by 3
//     playerHealth += 3;

    

    
// }
//     //Draw powerup
//     function drawPowerUps() {
//         ctx.fillStyle = "orange";
//         powerUps.forEach(powerUp => {
//             ctx.fillRect(powerUp.x -5, powerUp.y -5, 10, 10);
//         });
//     }
// // Update game state
// function update() {

//     // Check game over conditions
//     if (playerHealth <= 0 || baseHealth <= 0) {
//         gameOver();
//         return;
//     }

    
    
//     //musicSound.play();

//     // Move player
//     if (leftPressed && playerX > 0) {
//         playerX -= PLAYER_SPEED;
//     } 
//     else if (rightPressed && playerX < WIDTH) {
//         playerX += PLAYER_SPEED;
//     }
//     else if (upPressed && playerY > 0) {
//         playerY -= PLAYER_SPEED;
//     }
//     else if (downPressed && playerY < HEIGHT) {
//         playerY += PLAYER_SPEED;
//     }
//     // Shoot bullet if spacebar is pressed
//     // if (apressed||dpressed||wpressed||spressed) {
//     //     shootBullet();
//     //     apressed = false;
//     //     dpressed = false;
//     //     wpressed = false;
//     //     spressed = false;
//     // }
//     //shoot bullet in top direction
//     if(wpressed){
//         shootBullet1();
//         wpressed = false;
//     }

//     //shoot bullet in bottom direction
//     if(spressed){
//         shootBullet2();
//         spressed = false;
//     }
//     //shoot bullet in left direction
//     if(apressed){
//         shootBullet3();
//         apressed = false;
//     }
//     //shoot bullet in right direction
//     if(dpressed){
//         shootBullet4();
//         dpressed = false;
//     }
//     // Move bullets
//     bullets.forEach((bullet, index) => {
//         bullet.x += bullet.vx;
//     bullet.y += bullet.vy;

//         // Check for bullet-bot collisions
//         bots.forEach((bot, botIndex) => {
//             if (isColliding(bullet, bot)) {
//                 score++;
//                 bots.splice(botIndex, 1);
//                 bullets.splice(index, 1);
//                 bulletSound.play();
//             }
//         });
//         // Remove bullet if it goes off-screen
//         if (bullet.y < 0) {
//             bullets.splice(index, 1);
//         }
//     });


//     // Move bots
//     bots.forEach((bot, index) => {
//         bot.y += BOT_SPEED;

//         // Check for bot-player collisions
//         if (isColliding(bot, { x: playerX, y: playerY })) {
//             playerHealth--;
//             bots.splice(index, 1);
//         }

//         // Check for bot-base collisions
//         if (bot.y >= HEIGHT-20) {
//             baseHealth--;
//             bots.splice(index, 1);
//         }
//     });

//     // Create new bot randomly
//     if (Math.random() < 0.01) {
//         const botX = Math.random() * WIDTH;
//         const botY = 0;
//         bots.push({ x: botX, y: botY });
//     }

//     // Check game over conditions
//     if (playerHealth <= 0 || baseHealth <= 0) {
//         gameOver();
//     }
// }

// // Draw game objects
// function draw() {
//     // Clear canvas
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);

//     // Draw player
//     ctx.fillStyle = "blue";
//     ctx.fillRect(playerX - 25, playerY - 25, 50, 50);

//     // Draw bullets
//     ctx.fillStyle = "red";
//     bullets.forEach(bullet => {
//         ctx.fillRect(bullet.x - 5, bullet.y - 5, 10, 10);
//     });

//     // Draw bots
//     ctx.fillStyle = "green";
//     bots.forEach(bot => {
//         ctx.fillRect(bot.x - 10, bot.y - 10, 20, 20);
//     });
//     //drwaing the base
//     ctx.fillStyle = "yellow";
//     ctx.fillRect(0, HEIGHT-20, WIDTH, 20);
    
//     // Draw power-ups
//     drawPowerUps();

//     //Draw player2
//     ctx.fillStyle = "pink";
//     ctx.fillRect(player2X - 25, player2Y - 25, 30, 30);

//     // Draw HUD
//     ctx.fillStyle = "black";
//     ctx.font = "20px Arial";
//     ctx.fillText("Player Health: " + playerHealth, 10, 30);
//     ctx.fillText("Base Health: " + baseHealth, 10, 60);
//     ctx.fillText("Score: " + score, 10, 90);
// }

// // Game over
// function gameOver() {
//     //Play music when game over

//     // Stop game loop and remove event listeners
       
//         // Stop game loop and remove event listeners
//         clearInterval(gameLoop);
//         document.removeEventListener("keydown", handleKeyDown);
//         document.removeEventListener("keyup", handleKeyUp);
    
//         // Display game over message
//         if (playerHealth <= 0) {
//             ctx.fillStyle = "black";
//             ctx.font = "40px Arial";
//             ctx.fillText("Player Died", WIDTH / 2 - 100, HEIGHT / 2);
//         } else if (baseHealth <= 0) {
//             ctx.fillStyle = "black";
//             ctx.font = "40px Arial";
//             ctx.fillText("Base Destroyed", WIDTH / 2 - 130, HEIGHT / 2);
//         }
    
// }

// // Handle keydown events
// function handleKeyDown(event) {
//     if (event.keyCode === 37) {  // Left arrow key
//         leftPressed = true;
//     } else if (event.keyCode === 39) {  // Right arrow key
//         rightPressed = true;
//     }
//     //to move the player in all directions using up,down,right and left arrow keys
//     else if(event.keyCode === 38){ //up arrow key
//        upPressed = true;
//     }
//     else if(event.keyCode === 40){ //down arrow key
//         downPressed = true;
//     }

// }

// // Handle keyup events
// function handleKeyUp(event) {
//     if (event.keyCode === 37) {  // Left arrow key
//         leftPressed = false;
//     } 
//     else if (event.keyCode === 39) {  // Right arrow key
//         rightPressed = false;
//     }
//     //to move the player in all directions using up,down,right and left arrow keys
//     else if(event.keyCode === 38){ //up arrow key
//         upPressed = false;
//     }
//     else if(event.keyCode === 40){ //down arrow key
//         downPressed = false;
//     }
//     // else if (event.keyCode === 32) {  // Spacebar
//     //     spacePressed = true;
//     //     shootBullet();
//     // }
//     else if(event.keyCode === 87){ //w key
//         wpressed = true;
//     }
//     else if(event.keyCode === 83){ //s key
//         spressed = true;
//     }
//     else if(event.keyCode === 65){ //a key
//         apressed = true;
//     }
//     else if(event.keyCode === 68){ //d key
//         dpressed = true;
//     }
// }


// function shootBullet1() {
//     const bulletX = playerX;
//     const bulletY = playerY - 25;
//     bullets.push({ x: bulletX, y: bulletY ,vx: 0, vy: -BULLET_SPEED});
// }
// function shootBullet2() {
//     const bulletX = playerX;
//     const bulletY = playerY + 25;
//     bullets.push({ x: bulletX, y: bulletY ,vx: 0, vy: BULLET_SPEED});
// }   
// function shootBullet3() {
//     const bulletX = playerX - 25;
//     const bulletY = playerY;
//     bullets.push({ x: bulletX, y: bulletY, vx: -BULLET_SPEED, vy: 0 });
// }
// function shootBullet4() {
//     const bulletX = playerX + 25;
//     const bulletY = playerY;
//     bullets.push({ x: bulletX, y: bulletY, vx: BULLET_SPEED, vy: 0 });
// }

// // Check collision between two objects
// function isColliding(obj1, obj2) {
//     return obj1.x < obj2.x + 20 &&
//            obj1.x + 20 > obj2.x &&
//            obj1.y < obj2.y + 20 &&
//            obj1.y + 20 > obj2.y;
// }

// // Start the game
// init();

//Game settings
const WIDTH = 800;  // Width of the game window
const HEIGHT = 600;  // Height of the game window
const PLAYER_SPEED = 5;  // Speed of player movement
const BULLET_SPEED = 8;  // Speed of bullets
const BOT_SPEED = 2;  // Speed of bots

// Game variables
let canvas, ctx;
let playerX, playerY;
let bullets;
let bots;
let baseHealth;
let playerHealth;
let score;
let leftPressed = false;
let rightPressed = false;
//let spacePressed = false;
let apressed = false;
let dpressed = false;
let wpressed = false;
let spressed = false;
let upPressed = false;
let downPressed = false;
//powerup
let powerUps = [];
//Audios
const bulletSound = new Audio("music/bulletSound.mp3");
const musicSound = new Audio("music/music.mp3");
const gameOverSound = new Audio("music/gameOver.mp3");
//Images
const playerImg = new Image();
playerImg.src = "pictures/alien1.jpg";

const bulletImg = new Image();
bulletImg.src = "pictures/bullet.jpg";
// Initialize the game
function init() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    playerX = WIDTH / 2;  // Set initial player position to the middle of the screen
    playerY = HEIGHT/2;
    bullets = [];
    bots = [];
    baseHealth = 100;
    playerHealth = 100;
    score = 0;

    // Event listeners for player movement to move player in all directions
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    

    // Start the game loop
    setInterval(gameLoop, 16);  // Run the game loop approximately 60 times per second
}


// Game loop
function gameLoop() {
    update();
    draw();
    updatePowerUps();
}

    //powerup function 
function updatePowerUps() {
    // Move power-ups
    powerUps.forEach((powerUp, index) => {
        //powerUp.y += BOT_SPEED;

        // Check for power-up-player collisions
        if (isColliding(powerUp, { x: playerX, y: playerY })) {
            applyPowerUpEffects(powerUp);
            powerUps.splice(index, 1);
        }

        // Remove power-up if it goes off-screen
        if (powerUp.y >= HEIGHT) {
            powerUps.splice(index, 1);
        }
    });
    // Create new power-up randomly
    if (powerUps.length === 0) {
        if (Math.random() < 0.01) {
            const powerUpX = Math.random() * WIDTH;
            const powerUpY = Math.random() * HEIGHT;
            powerUps.push({ x: powerUpX, y: powerUpY });
        }
    }
}


    //function for Powerup
function applyPowerUpEffects(powerUp) {
    // Increase player health by 3
    playerHealth += 3;

    

    
}
    //Draw powerup
    function drawPowerUps() {
        powerUps.forEach(powerUp => {
            ctx.beginPath();
            ctx.arc(powerUp.x, powerUp.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        });
        

    }
// Update game state
function update() {

    // Check game over conditions
    if (playerHealth <= 0 || baseHealth <= 0) {
        gameOver();
        return;
    }
    
    //musicSound.play();

    // Move player
    if (leftPressed && playerX > 0) {
        playerX -= PLAYER_SPEED;
    } 
    else if (rightPressed && playerX < WIDTH) {
        playerX += PLAYER_SPEED;
    }
    else if (upPressed && playerY > 0) {
        playerY -= PLAYER_SPEED;
    }
    else if (downPressed && playerY < HEIGHT) {
        playerY += PLAYER_SPEED;
    }
    // Shoot bullet if spacebar is pressed
    // if (apressed||dpressed||wpressed||spressed) {
    //     shootBullet();
    //     apressed = false;
    //     dpressed = false;
    //     wpressed = false;
    //     spressed = false;
    // }
    //shoot bullet in top direction
    if(wpressed){
        shootBullet1();
        wpressed = false;
    }

    //shoot bullet in bottom direction
    if(spressed){
        shootBullet2();
        spressed = false;
    }
    //shoot bullet in left direction
    if(apressed){
        shootBullet3();
        apressed = false;
    }
    //shoot bullet in right direction
    if(dpressed){
        shootBullet4();
        dpressed = false;
    }
    // Move bullets
    bullets.forEach((bullet, index) => {
        bullet.x += bullet.vx;
    bullet.y += bullet.vy;

        // Check for bullet-bot collisions
        bots.forEach((bot, botIndex) => {
            if (isColliding(bullet, bot)) {
                score++;
                bots.splice(botIndex, 1);
                bullets.splice(index, 1);
                bulletSound.play();
            }
        });
        // Remove bullet if it goes off-screen
        if (bullet.y < 0) {
            bullets.splice(index, 1);
        }
    });


    // Move bots
    bots.forEach((bot, index) => {
        bot.y += BOT_SPEED;

        // Check for bot-player collisions
        if (isColliding(bot, { x: playerX, y: playerY })) {
            playerHealth--;
            bots.splice(index, 1);
        }

        // Check for bot-base collisions
        if (bot.y >= HEIGHT-20) {
            baseHealth--;
            bots.splice(index, 1);
        }
    });

    // Create new bot randomly
    if (Math.random() < 0.01) {
        const botX = Math.random() * WIDTH;
        const botY = 0;
        bots.push({ x: botX, y: botY });
    }

    // Check game over conditions
    if (playerHealth <= 0 || baseHealth <= 0) {
        gameOver();
    }
}

// Draw game objects
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw player
    ctx.fillStyle = "blue";
    ctx.fillRect(playerX - 25, playerY - 25, 50, 50);

    // Draw bullets
    ctx.fillStyle = "red";
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x - 5, bullet.y - 5, 10, 10);
    });

//     var bulletImage = new Image();
// bulletImage.src = 'pictures/bullet.jpg';

// bulletImage.onload = function() {
//   // Assuming you have an array of bullets named 'bullets'

//   // Draw bullets
//   bullets.forEach(bullet => {
//     canvas.width = bulletImage.width;
//   canvas.height = bulletImage.height;

//     ctx.drawImage(bulletImage, bullet.x - 5, bullet.y - 5, 10, 10);
//   });
// };



    // Draw bots
    ctx.fillStyle = "green";
    bots.forEach(bot => {
        ctx.fillRect(bot.x - 10, bot.y - 10, 20, 20);
    });
    //drwaing the base
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, HEIGHT-20, WIDTH, 20);
    
    // Draw power-ups
    drawPowerUps();

    // Draw HUD
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Player Health: " + playerHealth, 10, 30);
    ctx.fillText("Base Health: " + baseHealth, 10, 60);
    ctx.fillText("Score: " + score, 10, 90);
}

// Game over
function gameOver() {
    //Play music when game over

    // Stop game loop and remove event listeners
       
        // Stop game loop and remove event listeners
        clearInterval(gameLoop);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
    
        // Display game over message
        if (playerHealth <= 0) {
            ctx.fillStyle = "black";
            ctx.font = "40px Arial";
            ctx.fillText("Player Died", WIDTH / 2 - 100, HEIGHT / 2);
        } else if (baseHealth <= 0) {
            ctx.fillStyle = "black";
            ctx.font = "40px Arial";
            ctx.fillText("Base Destroyed", WIDTH / 2 - 130, HEIGHT / 2);
        }
    alert("Game Over");
    init();
}

// Handle keydown events
function handleKeyDown(event) {
    if (event.keyCode === 37) {  // Left arrow key
        leftPressed = true;
    } else if (event.keyCode === 39) {  // Right arrow key
        rightPressed = true;
    }
    //to move the player in all directions using up,down,right and left arrow keys
    else if(event.keyCode === 38){ //up arrow key
       upPressed = true;
    }
    else if(event.keyCode === 40){ //down arrow key
        downPressed = true;
    }

}

// Handle keyup events
function handleKeyUp(event) {
    if (event.keyCode === 37) {  // Left arrow key
        leftPressed = false;
    } 
    else if (event.keyCode === 39) {  // Right arrow key
        rightPressed = false;
    }
    //to move the player in all directions using up,down,right and left arrow keys
    else if(event.keyCode === 38){ //up arrow key
        upPressed = false;
    }
    else if(event.keyCode === 40){ //down arrow key
        downPressed = false;
    }
    // else if (event.keyCode === 32) {  // Spacebar
    //     spacePressed = true;
    //     shootBullet();
    // }
    else if(event.keyCode === 87){ //w key
        wpressed = true;
    }
    else if(event.keyCode === 83){ //s key
        spressed = true;
    }
    else if(event.keyCode === 65){ //a key
        apressed = true;
    }
    else if(event.keyCode === 68){ //d key
        dpressed = true;
    }
}function shootBullet1() {
    const bulletX = playerX;
    const bulletY = playerY - 25;
    bullets.push({ x: bulletX, y: bulletY ,vx: 0, vy: -BULLET_SPEED});
}
function shootBullet2() {
    const bulletX = playerX;
    const bulletY = playerY + 25;
    bullets.push({ x: bulletX, y: bulletY ,vx: 0, vy: BULLET_SPEED});
}   
function shootBullet3() {
    const bulletX = playerX - 25;
    const bulletY = playerY;
    bullets.push({ x: bulletX, y: bulletY, vx: -BULLET_SPEED, vy: 0 });
}
function shootBullet4() {
    const bulletX = playerX + 25;
    const bulletY = playerY;
    bullets.push({ x: bulletX, y: bulletY, vx: BULLET_SPEED, vy: 0 });
}

// Check collision between two objects
function isColliding(obj1, obj2) {
    return obj1.x < obj2.x + 20 &&
           obj1.x + 20 > obj2.x &&
           obj1.y < obj2.y + 20 &&
           obj1.y + 20 > obj2.y;
}

// Start the game
init();
