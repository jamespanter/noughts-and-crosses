const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const grid3 = document.getElementById('grid3');
const grid4 = document.getElementById('grid4');
const grid5 = document.getElementById('grid5');
const grid6 = document.getElementById('grid6');
const grid7 = document.getElementById('grid7');
const grid8 = document.getElementById('grid8');
const grid9 = document.getElementById('grid9');

const addTurn = (grid) => {
    grid.classList.add('red')
}

const remove = () => {
    grid1.classList.remove('red');
    grid2.classList.remove('red');
    grid3.classList.remove('red');
    grid4.classList.remove('red');
    grid5.classList.remove('red');
    grid6.classList.remove('red');
    grid7.classList.remove('red');
    grid8.classList.remove('red');
    grid9.classList.remove('red');
}