const btnGrid = document.getElementById('btn-grid');
const gridContainer = document.querySelector('.grid-container');
const randomColor = Math.floor(Math.random()*16777215).toString(16);



let gridSize;
function getGrid() {
    gridSize = Number(prompt('What is your desired grid size?',''));
}

function drawGrid() {
    for (let j = 1; j <= gridSize; j++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

        for (let i = 1; i <= gridSize; i++) {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-div');
            gridRow.appendChild(gridDiv);
        }
    }
}

function clearGrid() {
    const myNode = document.getElementById("grid-container");
    myNode.textContent = ''; 
}

btnGrid.addEventListener('click', () => {
    clearGrid();
    getGrid();
    drawGrid();
});
