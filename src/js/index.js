// Styles
import '../less/styles.less';

// Title
document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Star Wars Planets - <em>Guessing Game</em></h1>');

// Create Element
const createElem = (elem = 'div', name = null, attrs = null, pos = 'body') => {
    const create = () => {
        let e = document.createElement(elem);
        name ? e.id = name : null;
        if(attrs){
            Object.keys(attrs).forEach((attr) => {
                e.setAttribute(attr, attrs[attr])
            });
        }
        document.querySelector(pos).insertAdjacentElement('beforeend', e);
    }
    return create;
}

// Death Star
const deathStar = createElem('div','death-star');
deathStar();

// Death Star lasers
for(let i = 0; i <= 5; i++){
    let laser = createElem('span', `laser-${i}`, {'class' : 'laser'}, '#death-star');
    laser();
}

// Alderaan
const alderaan = createElem('div','alderaan');
alderaan();

// Board
const main = createElem('main','main');
main();

// Words
let wordArr = ['HOTH', 'ENDOR', 'MUSTAFAR', 'GEONOSIS', 'NABOO', 'CORUSCANT', 'ALDERAAN', 'TATOOINE', 'BESPIN', 'KAMINO', 'UTAPAU', 'KASHYYYK'];
let clueArr = ['Wampas', 'Ewoks', 'Lava', 'Droid Factory', 'N-1 Starfighter', 'The Republic Capital', 'Bail Organa', 'Jabba the Hutt', 'Lando System', 'Cloners', 'Boga', 'Wookies']

// Select a word
let randNum = Math.round(Math.random() * (wordArr.length - 1));
let wordItem = wordArr[randNum];
let clueItem = clueArr[randNum];
console.log(wordItem);  

// Number of guess
let guesses = Math.round(wordItem.length / 2);
const numGuessesRemaining = (num) => {
    document.querySelector('main').insertAdjacentHTML('afterbegin', `<h2 id="number-of-guessings">Guess the name of a random Star Wars planet.<br /> Clue: ${clueItem} <em>Number of guesses remaining - ${num}</em></h2>`);
}
numGuessesRemaining(guesses);

// Correct guesses
let correcGuesses = 0;
   
// Output a word
for(let i = 0; i < wordItem.length; i++){
    let input = createElem('input', null, {'maxlength' : 1, 'type' : 'text', 'class' : 'input--letter'}, 'main');
    input(); 
}

// Game progress
const gameProgress = (num) => {
    const displayLasers = () => {
        const $laser0 = document.querySelector('#laser-0');
        const $laser1 = document.querySelector('#laser-1');
        const $laser2 = document.querySelector('#laser-2');
        const $laser3 = document.querySelector('#laser-3');
        const $laser4 = document.querySelector('#laser-4');
        const $laser5 = document.querySelector('#laser-5');
        $laser0 ? $laser0.style.cssText = 'display:block;' : null;
        if(num == 5){ return; }
        $laser1 ? $laser1.style.cssText = 'display:block;' : null;
        $laser2 ? $laser2.style.cssText = 'display:block;' : null;
        if(num == 4){ return; }
        $laser3 ? $laser3.style.cssText = 'display:block;' : null;
        if(num == 3){ return; }
        $laser4 ? $laser4.style.cssText = 'display:block;' : null;
        if(num == 2){ return; }
        $laser5 ? $laser5.style.cssText = 'display:block;' : null;
    }
    displayLasers();
    if(num == 0){
        const $inputs = document.querySelectorAll('.input--letter')
        $inputs.forEach((e) => {
            e.setAttribute('disabled', true);
            e.style.cssText = 'opacity:.5';
        });
        const removeLasers = document.querySelectorAll('.laser');
        removeLasers.forEach((e) => {
            e.remove();
        })
        document.querySelector('#alderaan').remove();
        lostGame();
    }
}

// Message
const message = (msg) => {
    const output = () => {
        const id = 'msg-' + Math.round(Math.random() * 10000);
        const idHash = '#' + id;
        let outputMsg = createElem('div', id, {'class' : 'message'});
        outputMsg();
        document.querySelector(idHash).innerHTML = '<p>' + msg + '</p>';
        let close = createElem('span', null, null, idHash);
        close();
        let lightboxBg = createElem('span', null, {'class' : 'lightbox-bg'});
        lightboxBg();
    }
    return output;
}

// Close Message
const closeMessage = () => {
    document.addEventListener('click', () => {
        location.reload();
    });
}

// Won
const wonGame = () => {
    const succcesMsg = message('You saved the planet!');
    succcesMsg();
    closeMessage();
}

// Failed
const lostGame = () => {
    const failMsg = message('You Failed! The planet has been destroyed');
    failMsg();
    closeMessage();
}

// Input functionaility
let $inputs = document.querySelectorAll('.input--letter');
$inputs.forEach((input, index) => {
    input.setAttribute('data-letter', wordItem[index]);
    input.addEventListener('keyup', (e) => {
        let key = e.key.toUpperCase();
        if(!key.match(/ALT|BACKSPACE|TAB|CONTROL/)){
            if(key == input.getAttribute('data-letter')){
                input.setAttribute('placeholder', key);
                input.setAttribute('disabled', true);
                input.nextElementSibling ? input.nextElementSibling.focus() : null;
                correcGuesses += 1;
                if(correcGuesses == wordItem.length){
                    wonGame();
                }
            }else{
                document.querySelector('#number-of-guessings').remove();
                guesses !== 0 ? guesses -= 1 : null; 
                numGuessesRemaining(guesses);
                gameProgress(guesses);
            }     
        }
    });
});

// Copyright
const copyright = createElem('footer', 'footer');
copyright();
document.querySelector('footer').innerHTML = '<small>&copy; 1986</small>';