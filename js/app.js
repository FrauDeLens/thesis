console.log("Bughunt Started!");

// Screens
const titleScreen = document.getElementById("title-screen");
const loginScreen = document.getElementById("login-screen");
const aboutScreen = document.getElementById("about-screen");
const mainMenu = document.getElementById("main-menu");
//difficulty selection
const difficultySelection = document.getElementById("difficulty-selection");
const adminScreen = document.getElementById("admin-screen");
const difficultyProceedButton = document.getElementById("difficulty-proceed-button");
const enemyIntroOverlay = document.getElementById("enemy-intro-overlay");
const enemyIntroTopic = document.getElementById("enemy-intro-topic");
const enemyIntroName = document.getElementById("enemy-intro-name");
const enemyIntroText = document.getElementById("enemy-intro-text");
const enemyIntroContinue = document.getElementById("enemy-intro-continue");
const hintCostDisplay = document.getElementById("hint-cost-display");
const registerFullnameInput = document.getElementById("register-fullname");

let currentUser = null;

async function api(path, method, body) {
    const options = {
        method: method || "GET",
        credentials: "same-origin",
        headers: {}
    };

    if (body !== undefined && body !== null) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    const response = await fetch("api/" + path, options);
    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error("Cannot reach the BugHunt server. Start Apache and MySQL in XAMPP.");
    }

    if (!data.ok) {
        throw new Error(data.error || "Request failed.");
    }

    return data;
}

function persistProgress() {
    localStorage.setItem("progress", JSON.stringify(progress));
    if (currentUser && currentUser.role === "student") {
        api("progress.php", "POST", { progress: progress }).catch(function () {});
    }
}

function normalizeAnswer(text) {
    return String(text || "")
        .replace(/\r\n/g, "\n")
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .trim()
        .toLowerCase()
        .replace(/[ \t]+/g, " ")
        .replace(/\n+/g, "\n");
}

function enemiesByDifficulty(name) {
    if (name === "easy") return easyEnemies;
    if (name === "normal") return normalEnemies;
    if (name === "hard") return hardEnemies;
    return hellEnemies;
}

function resetDifficultyFocus() {
    selectedDifficulty = null;
    difficultySelection.classList.remove(
        "focus-easy",
        "focus-normal",
        "focus-hard",
        "focus-hell"
    );
    difficultyProceedButton.classList.remove("visible");
    document.getElementById("difficulty-intro-panel").style.display = "none";
}

async function loadEnemyQuestions(enemy) {
    if (!enemy || !enemy.id) {
        return;
    }

    try {
        const data = await api(
            "questions.php?enemy_id=" +
            encodeURIComponent(enemy.id) +
            "&count=" +
            enemy.hearts
        );

        if (data.questions && data.questions.length) {
            enemy.bugs = data.questions.map(function (question) {
                return {
                    code: question.code,
                    answer: question.answer,
                    hint: question.hint
                };
            });
        }
    } catch (error) {
        console.warn(error);
    }
}

function showEnemyIntro(enemy) {
    enemyIntroTopic.textContent = (enemy.topic || "PYTHON BUG").toUpperCase();
    enemyIntroName.textContent = enemy.name;
    enemyIntroText.textContent = enemy.intro || "A wild bug appeared.";
    enemyIntroOverlay.classList.add("visible");
}

function hideEnemyIntro() {
    enemyIntroOverlay.classList.remove("visible");
    answerInput.focus();
}

function updateHintCostDisplay() {
    if (!hintCostDisplay) {
        return;
    }

    if (!hasTriedCurrentEnemy) {
        hintCostDisplay.textContent = "Hint locked until you try.";
        return;
    }

    if (freeHintsRemaining > 0) {
        hintCostDisplay.textContent = "Free hints left: " + freeHintsRemaining;
        return;
    }

    hintCostDisplay.textContent = "Next hint: " + ((hintCount + 1) * 5) + " TP";
}

function applyLoggedInUser(user, serverProgress) {
    currentUser = user;
    localStorage.setItem("username", user.username);

    if (serverProgress) {
        progress = serverProgress;
        if (!progress.unlocks) {
            progress.unlocks = { easy: true, normal: false, hard: false, hell: false };
        }
        if (!progress.shop) {
            progress.shop = { maxHp: 5, freeHints: 0 };
        }
        persistProgress();
    }

    welcomeMessage.textContent = "Welcome, " + user.username + "!";
    updatePoints();

    if (user.role === "teacher") {
        document.getElementById("admin-welcome").textContent =
            "Logged in as " + user.username;
        fillEnemySelect();
        showScreen(adminScreen);
        loadStudentProgressTable();
        loadQuestionPoolList();
        return;
    }

    showScreen(mainMenu);
}




// Login
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
const registerButton = document.getElementById("register-button");

// Register Screen
const registerScreen = document.getElementById("register-screen");
const registerUsernameInput =document.getElementById("register-username");
const registerPasswordInput =document.getElementById("register-password");
const registerConfirmPasswordInput =document.getElementById("register-confirm-password");
const createAccountButton =document.getElementById("create-account-button");
const backToLoginButton =document.getElementById("back-to-login-button");
const registerMessage =document.getElementById("register-message");


//main menu

const welcomeMessage = document.getElementById("welcome-message");
const startButton = document.getElementById("start-button");
const aboutButton = document.getElementById("about-button");
const truePointsMenu = document.getElementById("true-points-menu");
const logoutButton = document.getElementById("logout-button");


// SHOP SCREEN
const shopScreen =document.getElementById("shop-screen");
const shopButton =document.getElementById("shop-button");
const shopBackButton =document.getElementById("shop-back-button");
const shopTruePoints =document.getElementById("shop-true-points");


// MAX HP
const maxHpDisplay =document.getElementById("max-hp-display");
const maxHpCost =document.getElementById("max-hp-cost");
const maxHpButton =document.getElementById("max-hp-button");


// TEMP HP
const tempHpDisplay =document.getElementById("temp-hp-display");
const tempHpCost =document.getElementById("temp-hp-cost");
const tempHpButton =document.getElementById("temp-hp-button");

// FREE HINT
const freeHintDisplay =document.getElementById("free-hint-display");
const freeHintCost =document.getElementById("free-hint-cost");
const freeHintButton =document.getElementById("free-hint-button");


//collection screen
const collectionScreen =document.getElementById("collection-screen");
const collectionButton =document.getElementById("collection-button");
const collectionBackButton =document.getElementById("collection-back-button");
const easyTrophyList =document.getElementById("easy-trophy-list");
const normalTrophyList =document.getElementById("normal-trophy-list");
const hardTrophyList =document.getElementById("hard-trophy-list");
const hellTrophyList =document.getElementById("hell-trophy-list");


// Difficulty Buttons
const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");
const hellButton = document.getElementById("hell-button");


//back buttons
const difficultyBackButton = document.getElementById("difficulty-back-button");
const aboutBackButton = document.getElementById("about-back-button");
const battleBackButton = document.getElementById("battle-back-button");


// DEV SYSTEMS
const devMode = false;
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function(){

    // Remove only game progress
    localStorage.removeItem("progress");

    localStorage.removeItem("easyCompleted");

    localStorage.removeItem("normalCompleted");

    localStorage.removeItem("hardCompleted");

    localStorage.removeItem("hellCompleted");

    localStorage.removeItem("currentEnemyIndex");

    localStorage.removeItem("currentDifficulty");


    // Reset game variables
    progress = {

    unlocks:{
        easy:true,
        normal:false,
        hard:false,
        hell:false
    },

    truePoints:0,

shop:{

    maxHp:5,

    freeHints:0

},

easy:{
        hearts:5,
        trophies:[]
    },

    normal:{
        hearts:5,
        trophies:[]
    },

    hard:{
        hearts:5,
        trophies:[]
    },

    hell:{
        hearts:5,
        trophies:[]
    }

};

    currentEnemyIndex = 0;

    currentDifficulty = easyEnemies;

    currentEnemy =
    currentDifficulty[currentEnemyIndex];

    currentBug = 0;

    currentHearts =
currentEnemy.hearts;

difficultyPoints = 0;
enemyPointValue = 0;
temporaryHp = 0;
freeHintsRemaining = 0;
hintCount = 0;
playerHearts = 5;


// Reset battle state
battleLocked = false;

    canAdvance = false;

    alert("Game Progress Reset!");
    console.log("Game Progress Reset!");

});

// Battle Screen

const battleScreen = document.getElementById("battle-screen");
const bugCode = document.getElementById("bug-code");
const dialogueText = document.getElementById("dialogue-text");
const enemyHearts = document.getElementById("enemy-hearts");
const enemyName = document.getElementById("enemy-name");
const enemySprite = document.getElementById("enemy-sprite");
const playerSprite = document.getElementById("player-sprite");
const playerHeartsDisplay = document.getElementById("player-hearts");

//battlescreen inputs
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const hintButton = document.getElementById("hint-button");
answerInput.addEventListener("keydown", function(event){

    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){

        event.preventDefault();

        submitButton.click();

    }

});

// Victory Screen

const victoryScreen = document.getElementById("victory-screen");
const victoryMessage = document.getElementById("victory-message");
const victoryPointsMessage =document.getElementById("victory-points-message");
const trophyMessage = document.getElementById("trophy-message");
const nextEnemyButton = document.getElementById("next-enemy-button");
document.addEventListener("keyup", function(event){

    if(
        event.key === "Enter" &&
        victoryScreen.style.display === "block" &&
        canAdvance
    ){

        nextEnemyButton.click();

    }


    if(
    event.key === "Enter" &&
    defeatScreen.style.display === "block" &&
    canLeaveDefeat
){

    defeatButton.click();

}

});

//Defeat Screen
const defeatScreen =document.getElementById("defeat-screen");
const defeatMessage =document.getElementById("defeat-message");
const defeatButton =document.getElementById("defeat-button");

//points system
const truePointsDisplay =document.getElementById("true-points-display");
const difficultyPointsDisplay =document.getElementById("difficulty-points-display");
const enemyPointsDisplay =document.getElementById("enemy-points-display");






// Game Progress
// Current Difficulty
let currentDifficulty = easyEnemies;

let progress =
    JSON.parse(localStorage.getItem("progress")) || {

        // ==========================
        // DIFFICULTY UNLOCKS
        // ==========================

        unlocks: {

            easy: true,

            normal: false,

            hard: false,

            hell: false

        },


        // ==========================
        // TRUE POINTS
        // ==========================

        truePoints: 0,


        // ==========================
        // SHOP
        // ==========================

        shop: {

            // Permanent Max HP
            maxHp: 5,

            // Permanent Free Hints Per Run
            freeHints: 0

        },


        // ==========================
        // DIFFICULTY DATA
        // ==========================

        easy: {

            hearts: 5,

            trophies: []

        },


        normal: {

            hearts: 5,

            trophies: []

        },


        hard: {

            hearts: 5,

            trophies: []

        },


        hell: {

            hearts: 5,

            trophies: []

        }

    };
if(!progress.unlocks){

    progress.unlocks = {

        easy:true,
        normal:false,
        hard:false,
        hell:false

    };

    persistProgress();
}


// SHOP SAVE MIGRATION
if(!progress.shop){

    progress.shop = {

        maxHp: 5,

        freeHints: 0

    };

}
if(progress.shop.maxHp === undefined){

    progress.shop.maxHp = 5;

}
if(progress.shop.freeHints === undefined){

    progress.shop.freeHints = 0;

}


localStorage.setItem(
    "progress",
    JSON.stringify(progress)
);



let currentEnemyIndex = 0;

// Prevent invalid enemy index
if(currentEnemyIndex >= currentDifficulty.length){

    currentEnemyIndex = 0;

}


// SHOP VARIABLES
let temporaryHp = 0;
let freeHintsRemaining = 0;
const maxHpUpgradeCosts = [

    50,

    100,

    200,

    400,

    800

];const freeHintUpgradeCosts = [

    100,

    200,

    400,

    800,

    1600

];

let currentEnemy =currentDifficulty[currentEnemyIndex];
let currentBug = 0;
let currentHearts =currentEnemy.hearts;
let playerHearts = progress.shop.maxHp;

let difficultyPoints = 0;
let enemyPointValue = 0;
let hintCount = 0;

let canAdvance = false;
let canLeaveDefeat = false;
let battleLocked = false;
let hasTriedCurrentEnemy = false;

// Helper Function Area No Tresspassing
function showScreen(screen){

    titleScreen.style.display = "none";
    loginScreen.style.display = "none";
    registerScreen.style.display = "none";
    aboutScreen.style.display = "none";
    mainMenu.style.display = "none";
    difficultySelection.style.display = "none";
    collectionScreen.style.display = "none";
    shopScreen.style.display = "none";
    battleScreen.style.display = "none";
    victoryScreen.style.display = "none";
    defeatScreen.style.display = "none";
    adminScreen.style.display = "none";


    screen.style.display = "block";

}

function loadBug(){

    bugCode.textContent =
        currentEnemy.bugs[currentBug].code;

    // Hint stays locked until the player attempts an answer
    hintButton.disabled = !hasTriedCurrentEnemy;
    updateHintCostDisplay();

}
function showHint(){

    if(battleLocked){
        return;
    }

    const currentBugData =
        currentEnemy.bugs[currentBug];

    if(!currentBugData){
        return;
    }

    if(!currentBugData.hint){

        dialogueText.textContent =
            "No hint available for this bug.";

        return;
    }


    // ==========================
    // FREE HINT FIRST
    // ==========================

    if(freeHintsRemaining > 0){

        freeHintsRemaining--;

        playerSprite.src =
            "css/sprites/user/talking.png";

        dialogueText.textContent =
            "FREE HINT: " +
            currentBugData.hint;

        hintButton.disabled = true;

        return;
    }


    // ==========================
    // PAID HINT
    // ==========================

    const hintCost =
        (hintCount + 1) * 5;


    if(progress.truePoints < hintCost){

        dialogueText.textContent =
            "Not enough True Points! Hint costs " +
            hintCost +
            " TP.";

        return;
    }


    progress.truePoints -= hintCost;

    hintCount++;


    persistProgress();


    playerSprite.src =
        "css/sprites/user/talking.png";


    dialogueText.textContent =
        "HINT (" +
        hintCost +
        " TP): " +
        currentBugData.hint;


    updatePoints();

    hintButton.disabled = true;

}
function updateHearts(){

  
// PLAYER HEARTS
let playerHeartsHTML = "";

for(
    let i = 0;
    i < progress.shop.maxHp + temporaryHp;
    i++
){

    if(i < playerHearts){
        playerHeartsHTML +=
            '<span class="heart full-heart">♥</span>';
    }
    else{
        playerHeartsHTML +=
            '<span class="heart empty-heart">♥</span>';
    }

}

const playerName =
    localStorage.getItem("username") || "Player";

playerHeartsDisplay.innerHTML =
    playerName + ": " + playerHeartsHTML;

    // ENEMY HEARTS
    let enemyHeartsHTML = "";

    for(let i = 0; i < currentEnemy.hearts; i++){

        if(i < currentHearts){
            enemyHeartsHTML += '<span class="heart full-heart">♥</span>';
        }
        else{
            enemyHeartsHTML += '<span class="heart empty-heart">♥</span>';
        }

    }

    enemyHearts.innerHTML =
        "Enemy: " + enemyHeartsHTML;
}

function updatePoints(){

    truePointsMenu.textContent =
    "True Points: " + progress.truePoints;

    truePointsDisplay.textContent =
    "TP " + progress.truePoints;

    difficultyPointsDisplay.textContent =
    "RUN " + difficultyPoints;

    enemyPointsDisplay.textContent =
    "HIT " + enemyPointValue;

    updateHintCostDisplay();

}

function damagePlayer(){

    playerHearts--;

    updateHearts();

    console.log("Player hearts:", playerHearts);

    if(playerHearts <= 0){

        console.log("DEFEAT TRIGGERED");

        playerDefeated();

    }

}

function playerDefeated(){

    console.log("Player defeated!");

    let defeatedDifficulty =
    getCurrentDifficultyName();


    resetCurrentDifficulty();


    defeatMessage.textContent =
    "You lost all hearts.\n" +
    defeatedDifficulty +
    " progress has been reset.";


    showScreen(defeatScreen);
    canLeaveDefeat = false;

setTimeout(function(){

    canLeaveDefeat = true;

}, 250);

}

function resetCurrentDifficulty(){

    let currentProgress =
        getCurrentProgress();


    // Reset difficulty trophies
    currentProgress.trophies = [];


    // Reset saved hearts
    currentProgress.hearts =
        progress.shop.maxHp;


    // Reset temporary difficulty points
    difficultyPoints = 0;


    // Remove temporary HP
    temporaryHp = 0;


    // Remove remaining free hints for this run
    freeHintsRemaining = 0;


    // Reset player HP
    playerHearts =
        progress.shop.maxHp;


    persistProgress();


    console.log(
        getCurrentDifficultyName(),
        "reset!"
    );

}

function loadProgress(){

    currentEnemyIndex = 0;


    while(
        currentEnemyIndex < currentDifficulty.length &&
        getCurrentProgress().trophies.includes(
    currentDifficulty[currentEnemyIndex].trophy
)
    ){

        currentEnemyIndex++;

    }


    if(currentEnemyIndex >= currentDifficulty.length){

        currentEnemyIndex = 0;

    }


    currentEnemy =
    currentDifficulty[currentEnemyIndex];


    currentBug = 0;


    currentHearts =
    currentEnemy.hearts;

}

function getCurrentDifficultyName(){

    if(currentDifficulty === easyEnemies){
        return "easy";
    }

    else if(currentDifficulty === normalEnemies){
        return "normal";
    }

    else if(currentDifficulty === hardEnemies){
        return "hard";
    }

    else{
        return "hell";
    }

}

function getDifficultyPointValue(){

    if(currentDifficulty === easyEnemies){
        return 5;
    }

    else if(currentDifficulty === normalEnemies){
        return 10;
    }

    else if(currentDifficulty === hardEnemies){
        return 15;
    }

    else{
        return 20;
    }

}

function getCurrentProgress(){

    return progress[getCurrentDifficultyName()];

}

function hasCompletedDifficulty(enemyList){

    let difficultyName;


    if(enemyList === easyEnemies){

        difficultyName = "easy";

    }

    else if(enemyList === normalEnemies){

        difficultyName = "normal";

    }

    else if(enemyList === hardEnemies){

        difficultyName = "hard";

    }

    else{

        difficultyName = "hell";

    }


    return enemyList.every(enemy =>
        progress[difficultyName].trophies.includes(enemy.trophy)
    );

}

function startGame(enemyList){

    battleLocked = false;

    difficultyPoints = 0;

    freeHintsRemaining =
        progress.shop.freeHints;

   playerHearts =
    progress.shop.maxHp +
    temporaryHp;

freeHintsRemaining =
    progress.shop.freeHints;

    hasTriedCurrentEnemy = false;
hintButton.disabled = true;

    currentDifficulty = enemyList;

    battleScreen.classList.remove(
    "easy-battle",
    "normal-battle",
    "hard-battle",
    "hell-battle"
);

if(currentDifficulty === easyEnemies){

    battleScreen.classList.add("easy-battle");

}

else if(currentDifficulty === normalEnemies){

    battleScreen.classList.add("normal-battle");

}

else if(currentDifficulty === hardEnemies){

    battleScreen.classList.add("hard-battle");

}

else if(currentDifficulty === hellEnemies){

    battleScreen.classList.add("hell-battle");

}

    localStorage.setItem("currentDifficulty", 
    enemyList === easyEnemies ? "easy" :
    enemyList === normalEnemies ? "normal" :
    enemyList === hardEnemies ? "hard" :"hell");

    loadProgress();

    currentBug = 0;

    currentHearts = currentEnemy.hearts;

    enemyPointValue = getDifficultyPointValue();

    updatePoints();

    nextEnemyButton.textContent = "Next Enemy";

    nextEnemyButton.onclick = null;

    showScreen(battleScreen);

    enemyName.textContent = currentEnemy.name;
    playerSprite.src = "css/sprites/user/idle.png";

    if(currentEnemy.sprite){

    enemySprite.src =
    "css/Sprites/" +
    getCurrentDifficultyName().charAt(0).toUpperCase() +
    getCurrentDifficultyName().slice(1) +
    "/" +
    currentEnemy.sprite;

}
else{

    enemySprite.src = "";

}

dialogueText.textContent = "A wild enemy appeared!";

    updateHearts();

    loadBug();

    answerInput.value = "";

    answerInput.focus();

}

function updateTrophyCollection(){

    easyTrophyList.textContent =
        progress.easy.trophies.length > 0
        ? progress.easy.trophies.join(" | ")
        : "No trophies yet.";

    normalTrophyList.textContent =
        progress.normal.trophies.length > 0
        ? progress.normal.trophies.join(" | ")
        : "No trophies yet.";

    hardTrophyList.textContent =
        progress.hard.trophies.length > 0
        ? progress.hard.trophies.join(" | ")
        : "No trophies yet.";

    hellTrophyList.textContent =
        progress.hell.trophies.length > 0
        ? progress.hell.trophies.join(" | ")
        : "No trophies yet.";

}

function updateShopDisplay(){

    // TRUE POINTS

    shopTruePoints.textContent =
        "True Points: " +
        progress.truePoints;


    // MAX HP

    const currentMaxHp =
        progress.shop.maxHp;


    maxHpDisplay.textContent =
        "MAX HP: " +
        currentMaxHp +
        " / 10";


    // Maximum reached

    if(currentMaxHp >= 10){

        maxHpCost.textContent =
            "MAX LEVEL";

        maxHpButton.textContent =
            "MAXED";

        maxHpButton.disabled = true;

    }

    else{

        const upgradeIndex =
            currentMaxHp - 5;

        const cost =
            maxHpUpgradeCosts[
                upgradeIndex
            ];

        maxHpCost.textContent =
            "Cost: " +
            cost +
            " TP";

        maxHpButton.textContent =
            "Upgrade";

        maxHpButton.disabled = false;

    }


    // TEMP HP


    tempHpDisplay.textContent =
        "TEMP HP: +" +
        temporaryHp;

    tempHpCost.textContent =
        "Cost: 100 TP";


// FREE HINT

const currentFreeHints =
    progress.shop.freeHints;


freeHintDisplay.textContent =
    "FREE HINTS: " +
    currentFreeHints +
    " / 5";


if(currentFreeHints >= 5){

    freeHintCost.textContent =
        "MAX LEVEL";

    freeHintButton.textContent =
        "MAXED";

    freeHintButton.disabled = true;

}
else{

    const freeHintCost =
        freeHintUpgradeCosts[
            currentFreeHints
        ];

    freeHintCost.textContent =
        "Cost: " +
        freeHintCost +
        " TP";

    freeHintButton.textContent =
        "Upgrade";

    freeHintButton.disabled = false;

} }




//eventlistener area

titleScreen.addEventListener("click", function(){

    titleScreen.classList.add("fade-out");


    setTimeout(function(){

        if(devMode){

            showScreen(mainMenu);

        }
        else{

            showScreen(loginScreen);

        }

    }, 1000);

});

// OPEN REGISTER SCREEN
registerButton.addEventListener("click", function(){

    // Clear old messages
    loginMessage.textContent = "";
    registerMessage.textContent = "";

    // Clear registration fields
    registerUsernameInput.value = "";
    registerPasswordInput.value = "";
    registerConfirmPasswordInput.value = "";

    showScreen(registerScreen);

});
// BACK TO LOGIN
backToLoginButton.addEventListener("click", function(){

    registerMessage.textContent = "";

    showScreen(loginScreen);

});
// CREATE ACCOUNT
createAccountButton.addEventListener("click", function(){

    const username =
        registerUsernameInput.value.trim();

    const password =
        registerPasswordInput.value;

    const confirmPassword =
        registerConfirmPasswordInput.value;


    // Prevent blank registration
    if(
        username === "" ||
        password === "" ||
        confirmPassword === ""
    ){

        registerMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    // Check password match
    if(password !== confirmPassword){

        registerMessage.textContent =
            "Passwords do not match.";

        return;

    }


    // Check if an account already exists
    const savedUsername =
        localStorage.getItem("username");

    if(savedUsername !== null){

        if(username === savedUsername){

            registerMessage.textContent =
                "Username already exists.";

            return;

        }

    }


    // Save account
    localStorage.setItem(
        "username",
        username
    );

    localStorage.setItem(
        "password",
        password
    );


    registerMessage.textContent =
        "Account created! Returning to login...";


    // Clear registration form
    registerUsernameInput.value = "";
    registerPasswordInput.value = "";
    registerConfirmPasswordInput.value = "";


    // Return to login after a short delay
    setTimeout(function(){

        showScreen(loginScreen);

        loginMessage.textContent =
            "Account created! Please log in.";

    }, 1000);

});
//login
loginButton.addEventListener("click", function(){

    const inputUsername =
        usernameInput.value.trim();

    const inputPassword =
        passwordInput.value;


    const savedUsername =
        localStorage.getItem("username");

    const savedPassword =
        localStorage.getItem("password");


    // Prevent blank login
    if(
        inputUsername === "" ||
        inputPassword === ""
    ){

        loginMessage.textContent =
            "Please enter your username and password.";

        return;

    }


    // Check login
    if(
        inputUsername === savedUsername &&
        inputPassword === savedPassword
    ){

        loginMessage.textContent =
            "Login Successful!";

        welcomeMessage.textContent =
            "Welcome, " + inputUsername + "!";

        showScreen(mainMenu);

    }

    else{

        loginMessage.textContent =
            "Invalid Username or Password.";

    }

});


//starting from here we're progressing from main-menu
startButton.addEventListener("click", function(){

    showScreen(difficultySelection);

});

//back button inside the difficulty selection
difficultyBackButton.addEventListener("click", function(){

        selectedDifficulty = null;

document.getElementById(
    "difficulty-intro-panel"
).style.display = "none";

    showScreen(mainMenu);

});


// SHOP BUTTON
shopButton.addEventListener(
    "click",
    function(){

        updateShopDisplay();

        showScreen(shopScreen);

    }
);
shopBackButton.addEventListener(
    "click",
    function(){

        showScreen(mainMenu);

    }
);
// MAX HP UPGRADE
maxHpButton.addEventListener(
    "click",
    function(){

        const currentMaxHp =
            progress.shop.maxHp;


        // Already maxed

        if(currentMaxHp >= 10){

            return;

        }


        // Find cost

        const upgradeIndex =
            currentMaxHp - 5;


        const cost =
            maxHpUpgradeCosts[
                upgradeIndex
            ];


        // Not enough points

        if(progress.truePoints < cost){

    alert("Not enough True Points!");

    return;
}


        // Deduct points

        progress.truePoints -= cost;


        // Increase Max HP

        progress.shop.maxHp++;


        // Save

        persistProgress();


        // Update menu points

        updatePoints();


        // Update shop

        updateShopDisplay();

    }
);
// TEMP HP PURCHASE
tempHpButton.addEventListener(
    "click",
    function(){

        const cost = 100;


        // Not enough points

        if(progress.truePoints < cost){

    alert("Not enough True Points!");

    return;
}


        // Deduct points

        progress.truePoints -= cost;


        // Add temporary HP

        temporaryHp++;


        // Save points

        persistProgress();


        // Update displays

        updatePoints();

        updateShopDisplay();

    }
);
// FREE HINT UPGRADE
freeHintButton.addEventListener(
    "click",
    function(){

        const currentFreeHints =
            progress.shop.freeHints;


        // Already maxed

        if(currentFreeHints >= 5){

            return;

        }


        // Get current upgrade cost

        const cost =
            freeHintUpgradeCosts[
                currentFreeHints
            ];


        // Not enough points

        if(progress.truePoints < cost){

            alert("Not enough True Points!");

            return;

        }


        // Deduct points

        progress.truePoints -= cost;


        // Increase permanent free hints

        progress.shop.freeHints++;


        // Save

        persistProgress();


        // Update displays

        updatePoints();

        updateShopDisplay();

    }
);

//about
aboutButton.addEventListener("click", function(){

    showScreen(aboutScreen);

});
//back button inside about screen
aboutBackButton.addEventListener("click", function(){

    showScreen(mainMenu);

});

// LOG OUT
logoutButton.addEventListener("click", function(){

    console.log("Logging out...");

    // Hide main menu
    showScreen(loginScreen);

    // Clear login fields
    usernameInput.value = "";
    passwordInput.value = "";

    // Clear messages
    loginMessage.textContent = "";

    // Reset welcome message
    welcomeMessage.textContent = "Welcome!";

});
collectionButton.addEventListener("click", function(){

    updateTrophyCollection();

    showScreen(collectionScreen);

});
collectionBackButton.addEventListener("click", function(){

    showScreen(mainMenu);

});





// DIFFICULTY INTRODUCTION

const difficultyIntroductions = {

    easy: {
        title: "EASY",
        text:
            "A gentle start for new Bug Hunters.\n\n" +
            "Learn the basics of Python debugging\n" +
            "and face your first bugs.",
    },

    normal: {
        title: "NORMAL",
        text:
            "The bugs are getting smarter.\n\n" +
            "Put your debugging skills to the test\n" +
            "and push deeper into the hunt.",
    },

    hard: {
        title: "HARD",
        text:
            "Mistakes become harder to spot.\n\n" +
            "Expect tougher bugs, trickier problems,\n" +
            "and fewer chances to recover.",
    },

    hell: {
        title: "HELL",
        text:
            "There is no room for mistakes.\n\n" +
            "The bugs have become corrupted.\n" +
            "Only the strongest Bug Hunters survive.",
    }

};
function showDifficultyIntroduction(difficulty){

    selectedDifficulty = difficulty;

    const data =
        difficultyIntroductions[difficulty];

    const introTitle =
        document.getElementById(
            "difficulty-intro-title"
        );

    const introText =
        document.getElementById(
            "difficulty-intro-text"
        );

    const introPanel =
        document.getElementById(
            "difficulty-intro-panel"
        );

    introTitle.textContent =
        data.title;

    introText.textContent =
        data.text;

    introPanel.style.display =
        "block";
}

let selectedDifficulty = null;


// ==========================
// EASY
// ==========================

easyButton.addEventListener(
    "click",
    function(){

        if(!progress.unlocks.easy){
            return;
        }

        if(selectedDifficulty === "easy"){

            document.getElementById(
                "difficulty-intro-panel"
            ).style.display = "none";

            selectedDifficulty = null;

            startGame(easyEnemies);

            return;
        }

        selectedDifficulty = "easy";

        showDifficultyIntroduction("easy");

    }
);


// ==========================
// NORMAL
// ==========================

normalButton.addEventListener(
    "click",
    function(){

        if(!progress.unlocks.normal){
            return;
        }

        if(selectedDifficulty === "normal"){

            document.getElementById(
                "difficulty-intro-panel"
            ).style.display = "none";

            selectedDifficulty = null;

            startGame(normalEnemies);

            return;
        }

        selectedDifficulty = "normal";

        showDifficultyIntroduction("normal");

    }
);


// ==========================
// HARD
// ==========================

hardButton.addEventListener(
    "click",
    function(){

        if(!progress.unlocks.hard){
            return;
        }

        if(selectedDifficulty === "hard"){

            document.getElementById(
                "difficulty-intro-panel"
            ).style.display = "none";

            selectedDifficulty = null;

            startGame(hardEnemies);

            return;
        }

        selectedDifficulty = "hard";

        showDifficultyIntroduction("hard");

    }
);


// ==========================
// HELL
// ==========================

hellButton.addEventListener(
    "click",
    function(){

        if(!progress.unlocks.hell){
            return;
        }

        if(selectedDifficulty === "hell"){

            document.getElementById(
                "difficulty-intro-panel"
            ).style.display = "none";

            selectedDifficulty = null;

            startGame(hellEnemies);

            return;
        }

        selectedDifficulty = "hell";

        showDifficultyIntroduction("hell");

    }
);


//battle system brain
battleBackButton.addEventListener("click", function(){

    showScreen(difficultySelection);

    console.log(currentEnemy.name);

});
defeatButton.addEventListener("click", function(){

    showScreen(difficultySelection);

});

hintButton.addEventListener("click", function(){

    showHint();

});

submitButton.addEventListener("click", function(){

    if(battleLocked){
        return;
    }

    submitButton.disabled = true;

    setTimeout(function(){
        submitButton.disabled = false;
    }, 100);

    const playerAnswer = answerInput.value.trim();

    if(playerAnswer === ""){

        dialogueText.textContent =
        "Enter a fix first!";

        answerInput.focus();

        return;
    }

    // Player actually attempted an answer
    hasTriedCurrentEnemy = true;
    hintButton.disabled = false;


    if(
        playerAnswer.toLowerCase() === 
        currentEnemy.bugs[currentBug].answer.toLowerCase()
    ){

        /* ==========================
           ATTACK ANIMATION
        ========================== */

        playerSprite.src =
            "css/sprites/user/combat.png";

        // Remove previous animations
        playerSprite.classList.remove("attack-shake");
        enemySprite.classList.remove("hit-shake");
        battleScreen.classList.remove("screen-shake");

        // Force animation restart
        void playerSprite.offsetWidth;

        // Start animations
        playerSprite.classList.add("attack-shake");
        enemySprite.classList.add("hit-shake");
        battleScreen.classList.add("screen-shake");


        /* ==========================
           DAMAGE
        ========================== */

        currentHearts--;

        dialogueText.textContent =
            "Frau: Correct fix! " +
            currentEnemy.name +
            " took damage!";

        updateHearts();

        answerInput.value = "";


        /* ==========================
           END ANIMATION
        ========================== */

        setTimeout(function(){

            playerSprite.classList.remove("attack-shake");
            enemySprite.classList.remove("hit-shake");
            battleScreen.classList.remove("screen-shake");

        }, 650);

    console.log("Current hearts:", currentHearts);
    console.log("Current bug:", currentBug);
    console.log("Enemy:", currentEnemy.name);

     if(currentHearts <= 0){

    battleLocked = true;

    dialogueText.textContent =
    currentEnemy.name + " was defeated!";

    console.log("Enemy defeated!");

    // Add this enemy's remaining points
    difficultyPoints += enemyPointValue;

    updatePoints();

    victoryPointsMessage.textContent ="Points earned from enemy: " + enemyPointValue +
" | Difficulty Points: " + difficultyPoints;

    console.log("Enemy defeated:",currentEnemy.name);

    console.log(
        "Enemy Points:", enemyPointValue
    );

    console.log(
        "Difficulty Points:", difficultyPoints
    );

    let currentProgress = getCurrentProgress();

    if(!currentProgress.trophies.includes(currentEnemy.trophy)){

        currentProgress.trophies.push(currentEnemy.trophy);

        persistProgress();

    }

    console.log(progress);

    showScreen(victoryScreen);

answerInput.value = "";

canAdvance = false;

setTimeout(function(){

    canAdvance = true;

}, 250);

victoryMessage.textContent =
"Victory! " + currentEnemy.name + " has been defeated!";

trophyMessage.textContent =
"You received: " + currentEnemy.trophy;
}
        else{

    currentBug++;

    // Keep combat sprite visible for 700ms
    setTimeout(function(){

        playerSprite.src =
            "css/sprites/user/idle.png";

    }, 700);

    loadBug();

    answerInput.focus();

}

}
    else{

    playerSprite.src = "css/sprites/user/wrong.png";

    dialogueText.textContent =
    "Frau: Wrong fix! The bug remains.";

    enemyPointValue--;

    if(enemyPointValue < 0){

        enemyPointValue = 0;

    }

    updatePoints();

    damagePlayer();

    if(playerHearts <= 0){
        return;
    }

    answerInput.value = "";

    answerInput.focus();

}

});


nextEnemyButton.addEventListener("click", function(){
if(!canAdvance){
    return;
}

if(nextEnemyButton.textContent === "Return to Menu"){

    showScreen(mainMenu);

    return;

}

canAdvance = false;

    console.log("NEXT BUTTON CLICKED");

    battleLocked = false;

    // Move to next enemy
    currentEnemyIndex++;

    // Check if current difficulty is completed
    if(currentEnemyIndex >= currentDifficulty.length){


         // Bank temporary difficulty points
    progress.truePoints += difficultyPoints;

    console.log(
        "Difficulty completed!"
    );

    console.log(
        "Points earned:",
        difficultyPoints
    );

    console.log(
        "True Points:",
        progress.truePoints
    );

    // Clear temporary points
    difficultyPoints = 0;

    // Reset hint cost for the next difficulty
    hintCount = 0;

    // Remove temporary HP
    temporaryHp = 0;

    // Reset free hints for the next run
    freeHintsRemaining = 0;

    persistProgress();

    updatePoints();



        if(currentDifficulty === easyEnemies){
            

            victoryMessage.textContent =
            "Easy Difficulty Cleared!";

            trophyMessage.textContent =
            "Normal Difficulty Unlocked!";

            progress.unlocks.normal = true;

        persistProgress();

        }

        else if(currentDifficulty === normalEnemies){

            victoryMessage.textContent =
            "Normal Difficulty Cleared!";

            trophyMessage.textContent =
            "Hard Difficulty Unlocked!";

            progress.unlocks.hard = true;

        persistProgress();

        }

        else if(currentDifficulty === hardEnemies){

            victoryMessage.textContent =
            "Hard Difficulty Cleared!";

            trophyMessage.textContent =
            "Hell Difficulty Unlocked!";

            progress.unlocks.hell = true;

        persistProgress();

        }

        else if(currentDifficulty === hellEnemies){

            victoryMessage.textContent =
            "Congratulations!";

            trophyMessage.textContent =
            "You have completed BugHunt!";

        }

        nextEnemyButton.textContent =
        "Return to Menu";

        nextEnemyButton.onclick = function(){

            battleLocked = false;

            updatePoints();

            showScreen(mainMenu);

        };

        return;

    }

    currentEnemy =
    currentDifficulty[currentEnemyIndex];

    currentBug = 0;

    currentHearts =
    currentEnemy.hearts;

    // Reset hint for the new enemy
hasTriedCurrentEnemy = false;
hintButton.disabled = true;

    // Reset this enemy's temporary score
    enemyPointValue = getDifficultyPointValue();

    updatePoints();
    updateHearts();

    loadBug();

    answerInput.value = "";

    enemyName.textContent = currentEnemy.name;

if(currentEnemy.sprite){

    enemySprite.src =
    "css/Sprites/" +
    getCurrentDifficultyName().charAt(0).toUpperCase() +
    getCurrentDifficultyName().slice(1) +
    "/" +
    currentEnemy.sprite;

}
else{

    enemySprite.src = "";

}
playerSprite.src = "css/sprites/user/idle.png";
dialogueText.textContent = "Frau: A wild enemy appeared!";

    showScreen(battleScreen);

     answerInput.focus();

});


function resizeGame() {
    const game = document.getElementById("game-container");

    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;

    const scale = Math.min(scaleX, scaleY);

    game.style.transform =
        `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("resize", resizeGame);

resizeGame();