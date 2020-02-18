const grid1 = document.getElementById('grid1'),
    grid2 = document.getElementById('grid2'),
    grid3 = document.getElementById('grid3'),
    grid4 = document.getElementById('grid4'),
    grid5 = document.getElementById('grid5'),
    grid6 = document.getElementById('grid6'),
    grid7 = document.getElementById('grid7'),
    grid8 = document.getElementById('grid8'),
    grid9 = document.getElementById('grid9'),
    updatePanel = document.getElementById('update-panel'),
    resetButton = document.querySelector('button');

// const gridSections = [
//     grid1,
//     grid2,
//     grid3,
//     grid4,
//     grid5,
//     grid6,
//     grid7,
//     grid8,
//     grid9
// ]

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
    updatePanel.innerHTML = 'Blue player starts';
    updatePanel.classList.remove('vibrate-1', 'red', 'blue');
    resetButton.classList.remove('heartbeat');
    updatePanel.classList.add('blue');
    resetButton.style.backgroundColor = 'buttonface';
}

const addTurn = (grid) => {
    if (!updatePanel.innerHTML.includes('WINS') && !updatePanel.innerHTML.includes('NO WINNER')) {

        updatePanel.classList.remove('red', 'blue');
        const bluePlayer = document.getElementById("blue-player").value;
        const redPlayer = document.getElementById("red-player").value;
        const red = document.querySelectorAll('#grid .red').length;
        const blue = document.querySelectorAll('#grid .blue').length;

        if (grid.classList.contains('red') || (grid.classList.contains('blue'))) {
            updatePanel.innerHTML = "CAN'T GO THERE";
        } else if (red >= blue) {
            grid.classList.add('blue')
            updatePanel.classList.add('red');
            updatePanel.innerHTML = `${redPlayer}'s TURN`;
        } else {
            grid.classList.add('red')
            updatePanel.classList.add('blue');
            updatePanel.innerHTML = `${bluePlayer}'s TURN`;
        }

        if (red == 4 && blue == 4) {
            updatePanel.classList.remove('vibrate-1', 'red', 'blue')
            updatePanel.classList.add('vibrate-1');
            resetButton.style.backgroundColor = 'limegreen';
            resetButton.classList.add('heartbeat')
            updatePanel.innerHTML = 'NO WINNER';
        }

        if ((grid1.classList.contains('red') && grid2.classList.contains('red') && grid3.classList.contains('red')) ||
            (grid4.classList.contains('red') && grid5.classList.contains('red') && grid6.classList.contains('red')) ||
            (grid7.classList.contains('red') && grid8.classList.contains('red') && grid9.classList.contains('red')) ||
            (grid1.classList.contains('red') && grid4.classList.contains('red') && grid7.classList.contains('red')) ||
            (grid2.classList.contains('red') && grid5.classList.contains('red') && grid8.classList.contains('red')) ||
            (grid3.classList.contains('red') && grid6.classList.contains('red') && grid9.classList.contains('red')) ||
            (grid1.classList.contains('red') && grid5.classList.contains('red') && grid9.classList.contains('red')) ||
            (grid3.classList.contains('red') && grid5.classList.contains('red') && grid7.classList.contains('red'))) {
            updatePanel.classList.remove('vibrate-1', 'red', 'blue')
            updatePanel.classList.add('vibrate-1', 'red');
            updatePanel.innerHTML = `${redPlayer} WINS`;
            resetButton.style.backgroundColor = 'limegreen';
            resetButton.classList.add('heartbeat')
        } else if ((grid1.classList.contains('blue') && grid2.classList.contains('blue') && grid3.classList.contains('blue')) ||
            (grid4.classList.contains('blue') && grid5.classList.contains('blue') && grid6.classList.contains('blue')) ||
            (grid7.classList.contains('blue') && grid8.classList.contains('blue') && grid9.classList.contains('blue')) ||
            (grid1.classList.contains('blue') && grid4.classList.contains('blue') && grid7.classList.contains('blue')) ||
            (grid2.classList.contains('blue') && grid5.classList.contains('blue') && grid8.classList.contains('blue')) ||
            (grid3.classList.contains('blue') && grid6.classList.contains('blue') && grid9.classList.contains('blue')) ||
            (grid1.classList.contains('blue') && grid5.classList.contains('blue') && grid9.classList.contains('blue')) ||
            (grid3.classList.contains('blue') && grid5.classList.contains('blue') && grid7.classList.contains('blue'))) {
            updatePanel.classList.remove('vibrate-1', 'red', 'blue')
            updatePanel.classList.add('vibrate-1', 'blue');
            updatePanel.innerHTML = `${bluePlayer} WINS`;
            resetButton.style.backgroundColor = 'limegreen';
            resetButton.classList.add('heartbeat')
        }
    }
}