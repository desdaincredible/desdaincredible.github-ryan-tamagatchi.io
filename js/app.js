class Tamagatchi {
    constructor(name) {
        name = this.name;
    }
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    age = 20;
    messagesRight = ["Images/message1.png", "Images/message2.png", "Images/message7.png", 
            "Images/message8.png", "Images/message9.png", "Images/message10.png",  
            "Images/message14.png", "Images/message15.png" ];
    messagesLeft = ["Images/message3.png", "Images/message4.png", "Images/message5.png", 
            "Images/message6.png", "Images/message11.png", "Images/message12.png", 
            "Images/message13.png"];
}

let tamagatchi = new Tamagatchi(); 

let hunger = tamagatchi.hunger;
let sleepiness = tamagatchi.sleepiness;
let boredom = tamagatchi.boredom;
let age = tamagatchi.age;

let timePassing;
let seconds = 0;

const tamagatchiStatIncrease = () => {
    // Increase your pet's age every x minutes (5 seconds)
    if (seconds % 3 === 0){
        age++;
        $('.age').text('AGE: ' + age);
    }

    // Increase your pet's Hunger
    if (seconds % 1 === 0){
        hunger++;
        $('.hunger').text('HUNGER: ' + hunger);
    }

    // Increase pet's Sleepiness 
    if (seconds % 3 === 0){
        sleepiness++;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness)
    }

    // Increase pet's Bored metrics
    if (seconds % 2 === 0){
        boredom++;
        $('.boredom').text('BOREDOM: ' + boredom)
    }
}
const deathSequence = () => {
    clearInterval(timePassing);
    $('#column2').empty();
    $('#column3').empty();
    $('.btn').remove();
}
const tamagatchiDeathCheck = () => {
    if (hunger > 10){
        deathSequence();
        $('#column3').append(`<div class="dead-notice">${name} has died of hunger</div>`);
        playAgain();
    } else if (sleepiness > 10){
        deathSequence();
        $('#column3').append(`<div class="dead-notice">${name} has died of sleepiness</div>`);
        playAgain();
    } else if (boredom > 10){
        deathSequence();
        $('#column3').append(`<div class="dead-notice">${name} has died of boredom</div>`);
        playAgain();
    }
}
const playAgain = () => { 
    $('#column1').empty();
    $('#column1').prepend('<a href="https://docs.google.com/spreadsheets/d/1znWbx05MRUCOxCTfNz0ai9xnkGJS2bxmo71IbLVZkxY/edit?usp=sharing"><img src="Images/dead-background.jpg"></a>');
    $('#column3').append('<br><button class="btn btn-success" id="playAgain">PLAY AGAIN?</button>');
    $('#playAgain').click(function(){
        window.location.reload(true);  
    })
}
const winScreen = () => {
    deathSequence();
    playAgain();
}
const secondsGoUp = () => {
    seconds++;
    console.log(seconds);
    tamagatchiStatIncrease();
    tamagatchiDeathCheck();
    changeBackground(); 
    if (age === 25){
        winScreen();
    }

}
const pauseGame = () => {
    $('#column3').append('<button class="btn btn-secondary" id="stop">PAUSE</button>');
    //stops timer
    $('#stop').click(function(){
        clearInterval(timePassing);
    })
}
const playGame = () => {
    $('#column3').append('<br><button class="btn btn-success" id="playAgain">PLAY</button>');
    $('#playAgain').click(function(){
        timePassing = setInterval(secondsGoUp, 1000);
    })
}
const startGame = () => {
    $('.container-fluid').css('background', 'none');
    $('#column2').append("<div id='press-play'><h2>Don't let hunger, sleepiness, or boredom get above 10!</h2></div>");
    $('#column2').append('<button class="btn btn-success" id="start">PLAY GAME</button>');
    $('#start').click(function(){
        timePassing = setInterval(secondsGoUp, 1000);
        $('#press-play').remove();
        $('#start').remove();
        $('#column2').prepend('<img id="comic" src="Images/xmen.jpg">');
        feedButton();
        sleepButton();
        playButton();
        pauseGame();
        playGame();

    })
    }


const createStatDivs = () => {
    $('#column1').append('<div class="age">AGE: </div>');
    $('#column1').append('<div class="hunger">HUNGER: </div>');
    $('#column1').append('<div class="sleepiness">SLEEPINESS: </div>');
    $('#column1').append('<div class="boredom">BOREDOM: </div>');
}

const namePet = () => {
    $('#column2').prepend('<div id="title"><h1>Tomagatchi Ryan</h1><p>with plenty of ripped off Marvel images</p></div>');
    $('form').on('submit', (e) => {
        e.preventDefault();
        const inputValue = $('#input-name').val();
        name = inputValue;
        $('#column3').append(`<div class="name-line">${name}</div>`);
        $('form').remove();
        $('#home').remove();
        $('#title').remove();
        createStatDivs();
        startGame();
    })
    }
namePet()

const feedButton = () => {
    $('#column2').append('<br><button class="btn btn-warning" id="feed-btn">FEED</button>');
        $('#feed-btn').click(function(){
            if(hunger > 0){
                hunger--;
            }
        $('.hunger').text('HUNGER: ' + hunger);
        })
}

const sleepButton = () => {
    $('#column2').append('<button class="btn btn-warning" id="sleep-btn">SLEEP</button>');
    $('#sleep-btn').click(function(){
        if(sleepiness > 0){
            sleepiness--;
        }
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness);
    })
}

const playButton = () => {
    $('#column2').append('<button class="btn btn-warning" id="play-btn">PLAY</button>');
    $('#play-btn').click(function(){
        if (boredom > 0){
            boredom--;
        }
        $('.boredom').text('BOREDOM: ' + boredom);
    })
}

const changeBackground = () => {
    if (age >= 5 && age < 10){
        $('#comic').remove();
        $('#column2').prepend('<img id="comic" src="Images/hulk.jpg">');
    } else if (age >= 10 && age < 15){
        $('#comic').remove();
        $('#column2').prepend('<img id="comic" src="Images/thor.jpg">');
    } else if (age >= 15 && age < 20){
        $('#comic').remove();
        $('#column2').prepend('<img id="comic" src="Images/captain-america.jpg">');
    } else if (age > 20){
        $('#comic').remove();
        $('#column2').prepend('<img id="comic" src="Images/spiderman.jpg">');
    }
}
