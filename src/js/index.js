// Styles
import '../less/styles.less';

// Set up board
document.querySelector('body').style.backgroundColor = 'black';

// Title
document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Star Wars Planets - <em>Guessing Game</em></h1>');

// Create Element
const createElem = (elem,name) => {
    const create = () => {
        let e = document.createElement(elem);
        e.id = name;
        document.querySelector('body').insertAdjacentElement('beforeend', e);
    }
    return create;
}

// Death Star
const deathStar = createElem('div','death-star');
deathStar();

// Alderaan
const alderaan = createElem('div','alderaan');
alderaan();

// Words
let wordArr = ['Hoth', 'Naboo', 'Coruscant', 'Alderaan', 'Tatooine', 'Bespin']    