const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const grid3 = document.getElementById('grid3');
const grid4 = document.getElementById('grid4');
const grid5 = document.getElementById('grid5');
const grid6 = document.getElementById('grid6');
const grid7 = document.getElementById('grid7');
const grid8 = document.getElementById('grid8');
const grid9 = document.getElementById('grid9');
const updatePanel = document.getElementById('update-panel');

const gridSections = [
    grid1,
    grid2,
    grid3,
    grid4,
    grid5,
    grid6,
    grid7,
    grid8,
    grid9
]

const remove = () => {
    grid1.classList.remove('red', 'blue');
    grid2.classList.remove('red', 'blue');
    grid3.classList.remove('red', 'blue');
    grid4.classList.remove('red', 'blue');
    grid5.classList.remove('red', 'blue');
    grid6.classList.remove('red', 'blue');
    grid7.classList.remove('red', 'blue');
    grid8.classList.remove('red', 'blue');
    grid9.classList.remove('red', 'blue');
    updatePanel.innerHTML = '';
    updatePanel.classList.remove('vibrate-1', 'red', 'blue')
}

const addTurn = (grid) => {
    const red = document.querySelectorAll('div .red').length;
    const blue = document.querySelectorAll('div .blue').length;

    if (grid.classList.contains('red') || (grid.classList.contains('blue'))) {
        updatePanel.innerHTML = "CAN'T GO THERE";

    } else if (red > blue) {
        grid.classList.add('blue')
    } else {
        grid.classList.add('red')
    }
    if (gridSections[0 && 1 && 2].classList.contains('red')) {
        updatePanel.classList.add('vibrate-1', 'red');
        updatePanel.innerHTML = 'RED WINS';

    } else {}
}
// // horizontal win conditions
// grid1, grid2, grid3,
// grid4, grid5, grid6,
// grid7, grid8, grid9,

// // vertical win conditions
// grid1, grid2, grid3
// grid4, grid5, grid6
// grid7, grid8, grid9

// // vertical win conditions
// grid1, grid5, grid9
// grid3, grid5, grid7



// (grid1.classList.contains('red') && grid2.classList.contains('red') && grid3.classList.contains('red')) || (grid4.classList.contains('red') && grid5.classList.contains('red') && grid6.classList.contains('red')) || (grid7.classList.contains('red') && grid8.classList.contains('red') && grid9.classList.contains('red')) || (grid1.classList.contains('red') && grid2.classList.contains('red') && grid3.classList.contains('red')) || (grid4.classList.contains('red') && grid5.classList.contains('red') && grid6.classList.contains('red')) || (grid7.classList.contains('red') && grid8.classList.contains('red') && grid9.classList.contains('red')) || (grid1.classList.contains('red') && grid2.classList.contains('red') && grid3.classList.contains('red')) || (grid4.classList.contains('red') && grid5.classList.contains('red') && grid6.classList.contains('red')) || (grid7.classList.contains('red') && grid8.classList.contains('red') && grid9.classList.contains('red'))