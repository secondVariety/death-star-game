// Set up board
document.querySelector('body').style.backgroundColor = 'black';

// Create Element
const createElem = (elem,name) => {
    const create = () => {
        let e = document.createElement(elem);
        e.classList.add(name);
        document.querySelector('body').insertAdjacentElement('afterbegin', e);
    }
    return create;
}

// Death Star
const deathStar = createElem('div','death-star');
deathStar();

// Alderaan
const alderaan = createElem('div','alderaan');
alderaan();

