// fix bug with death alert

// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!



// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
class Tamagatchi {
    constructor(name) {
        name = this.name;
    }
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    age = 0;
    death = false;
}

// Instatiate your Tomagotchi
const tamagatchi = new Tamagatchi(); //put input info, once retrieved and working

// simplify variable names
let hunger = tamagatchi.hunger;
let sleepiness = tamagatchi.sleepiness;
let boredom = tamagatchi.boredom;
let age = tamagatchi.age;
let death = tamagatchi.death;

let bHunger = berserkTama.hunger;
let bSleepiness = berserkTama.sleepiness;
let bBoredom = berserkTama.boredom;
let bDeath = berserkTama.death;

// Morph your pet at certain ages.
class Berserk extends Tamagatchi {
    constructor(name, beserk){
        super(name);
        this.beserk = beserk;
    }
    // berserk button that changes tamagotchi's color, background too?
    berserkMode() {
        $('.grid-container').css('background', 'url(Images/background-berserk.jpg)');
    }
}
const berserkTama = new Berserk('name', 'berserkMode');

// time stuff
let timePassing;
let seconds = 0;

const secondsGoUp = () => {
    seconds++;
    console.log(seconds);

if (tamagatchi){

    // Increase your pet's age every x minutes (5 seconds)
    if (seconds % 10 === 0){
        age++;
        $('.age').text('AGE: ' + age);
    }

    // Increase your pet's Hunger
    if (seconds % 7 === 0){
        hunger++;
        $('.hunger').text('HUNGER: ' + hunger);
    }

    // Increase pet's Sleepiness 
    if (seconds % 10 === 0){
        sleepiness++;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness)
    }

    // Increase pet's Bored metrics
    if (seconds % 6 === 0){
        boredom++;
        $('.boredom').text('BOREDOM: ' + boredom)
    }
    
    // Your pet should die of Hunger, Boredom, or Sleepiness hits 10.
    if (seconds % 1 === 0) {
        if (hunger >= 11){
            clearInterval(timePassing);
            window.alert(`${name} has died of hunger`);
        } else if (sleepiness >= 11){
            clearInterval(timePassing);
            window.alert(`${name} has died of sleepiness`);
        } else if (boredom >= 11){
            clearInterval(timePassing);
            window.alert(`${name} has died of boredom`);
        }
    }
}

if (berserkTama) {
    
        // Increase your pet's Hunger
        if (seconds % 6 === 0){
            bHunger++;
            $('.hunger').text('HUNGER: ' + bHunger);
        }
    
        // Increase pet's Sleepiness 
        if (seconds % 8 === 0){
            bSleepiness++;
            $('.sleepiness').text('SLEEPINESS: ' + bSleepiness)
        }
    
        // Increase pet's Bored metrics
        if (seconds % 4 === 0){
            bBoredom++;
            $('.boredom').text('BOREDOM: ' + bBoredom)
        }
        
        // Berserk pet should die of Hunger, Boredom, or Sleepiness hits 15.
        if (seconds % 1 === 0) {
            if (bHunger >= 16){
                clearInterval(timePassing);
                window.alert(`You failed to feed ${name} enough human effigies. They are dead now.`);
            } else if (bSleepiness >= 16){
                clearInterval(timePassing);
                window.alert(`${name} went full on zombie. Hope they don’t come for your brains.`);
            } else if (bBoredom >= 16){
                clearInterval(timePassing);
                window.alert(`You’re too boring for ${name}. You have killed them.`);
            }
        }
}

}

// sets up seconds
$('#start').click(function(){
    timePassing = setInterval(secondsGoUp, 1000);
})

//stops timer
$('#stop').click(function(){
    clearInterval(timePassing);
})

const createStatDivs = () => {
// Age
$('.item1').append('<div class="age">AGE: </div>');

// Hunger
$('.item1').append('<div class="hunger">HUNGER: </div>');

// Sleepiness
$('.item1').append('<div class="sleepiness">SLEEPINESS: </div>');

// Bored
$('.item1').append('<div class="boredom">BOREDOM: </div>');

}
createStatDivs();

const feedButton = () => {
    $('#feed-btn').click(function(){
        hunger--;
        $('.hunger').text('HUNGER: ' + hunger);
    })
}

feedButton()

const sleepButton = () => {
    $('#sleep-btn').click(function(){
        sleepiness--;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness);
    })
}

sleepButton()

const playButton = () => {
    $('#play-btn').click(function(){
        boredom--;
        $('.boredom').text('BOREDOM: ' + boredom);
    })
}

playButton();

const namePet = () => {
$('form').on('submit', (e) => {
    e.preventDefault();
    const inputValue = $('#input-name').val();
    name = inputValue;
    $('.item2').append(`<div class="name-line">${name}.</div>`);
    $('form').remove();
})
}
namePet()

const playAgain = () => {
    if (hunger === 10 && sleepiness === 10 && boredom === 10){    name = "";
    age = 0;
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    }
}

// const render = () => {
//     // check stats if < 10
// }


// Morph your pet at certain ages.
const goBerserk = () => {
// have this button show up when tama reaches age 10
$('.item3').append('<button class="berserk-btn">GO BERSERK</button>');
$('.berserk-btn').on('click', berserkTama.berserkMode);
}
