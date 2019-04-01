// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
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
    death = 0;
}
// Instatiate your Tomagotchi
const tamagatchi = new Tamagatchi() //put input info, once retrieved and working

// simplify variable names
let hunger = tamagatchi.hunger;
let sleepiness = tamagatchi.sleepiness;
let boredom = tamagatchi.boredom;
let age = tamagatchi.age;
let death = tamagatchi.death;


// Name tamagotchi
// why you no worky?
// $('#input-name').on('submit', () => {
//     e.preventDefault();
//     const inputValue = $('#input-name').val()
//     console.log(inputValue);
//    $('body').append(`Say hello to ${inputValue}`)

   // create tamagatchi after input is received
   // const tamagatchi = new Tamagatchi()
// })


// time stuff
let timePassing;
let seconds = 0;
let minutes = 0;

const secondsGoUp = () => {
    seconds++;
    console.log(seconds);

    // count minutes
    if (seconds % 60 === 0){
        console.log(minutes);
    }

    // Increase your pet's age every x minutes (5 seconds)
    if (seconds % 5 === 0){
        age++;
        $('.age').text('AGE: ' + age);
    }

    // Increase your pet's Hunger
    if (seconds % 5 === 0){
        hunger++;
        $('.hunger').text('HUNGER: ' + hunger);
    }

    // Increase pet's Sleepiness 
    if (seconds % 5 === 0){
        sleepiness++;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness)
    }

    // Increase pet's Bored metrics
    if (seconds % 5 === 0){
        boredom++;
        $('.boredom').text('BOREDOM: ' + boredom)
    }
    
    // Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
    if (seconds % 1 === 0) {
        if (hunger >= 11){
            clearInterval(timePassing);
            window.alert('your pet has died of hunger')
        } else if (sleepiness >= 11){
            clearInterval(timePassing);
            window.alert('your pet has died of sleepiness')
        } else if (boredom >= 11){
            clearInterval(timePassing);
            window.alert('your pet has died of boredom')
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
$('.container').append('<div class="age">AGE: </div>');

// Hunger
$('.container').append('<div class="hunger">HUNGER: </div>');

// Sleepiness
$('.container').append('<div class="sleepiness">SLEEPINESS: </div>');

// Bored
$('.container').append('<div class="boredom">BOREDOM: </div>');

}
createStatDivs();

const render = () => {
    // check stats if < 10
}

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
    console.log(inputValue);

})
}
namePet()