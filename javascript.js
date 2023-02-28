const btnGrid = document.getElementById('btn-grid');
const btnToggle = document.getElementById('toggle');
const btnReset = document.getElementById('btn-reset');
const btnErase = document.getElementById('btn-erase');
const btnRandom = document.getElementById('btn-random');
const btnColor = document.getElementById('btn-color');
const gridContainer = document.querySelector('.grid-container');
const sliderSize = document.querySelector('.slider-size');
let slider = document.querySelector('input');


// Click and Hold mouse event (for optionals)
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Get GRID size by prompt.
let gridSize;
function getGrid() {
    gridSize = Number(prompt('What is your desired grid size?',''));
}

// Get GRID size by slider input, print slider value to HTML DOM.   
let sliderOutput = 32;
slider.oninput = function() {
    sliderOutput = this.value;
    sliderSize.textContent = `${this.value} x ${this.value}`;
  }

drawGrid();
function drawGrid() {
    for (let j = 1; j <= sliderOutput; j++) { // Change sliderOutput to gridSize if I want to get grid size input by prompt
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

        for (let i = 1; i <= sliderOutput; i++) {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-div');
            gridDiv.classList.add('toggle');
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
    // getGrid(); // If PROMPT is used.
    drawGrid();
});

btnToggle.onclick = () => {
    let gridDiv = document.querySelectorAll('.grid-div');
    for (let i = 0; i < gridDiv.length; i++) {
        gridDiv[i].classList.toggle('toggle')
    }
};

btnReset.addEventListener('click', () => {
    clearGrid();
    drawGrid();
});

btnErase.onclick = () => {
    document.onmouseover = function(e){ // using Event Delegation to target newly created DOMs
        const target = e.target.closest(".grid-div");
        if (target && mouseDown) {
            target.style.backgroundColor = 'white';        
        }
      };
};

btnRandom.onclick = () => { 
    document.onmouseover = function(e){
        const target = e.target.closest(".grid-div");
        const randomColor = '#'+(Math.floor(Math.random()*16777215).toString(16)); // Generate RANDOM color, must be inside function to generate a new random color on each mouseover.
        if (target && mouseDown) {
            target.style.backgroundColor = randomColor;
        }
      };
};

function update(picker) {
    document.onmouseover = function(e){
        const target = e.target.closest(".grid-div");
        if (target && mouseDown) {
            target.style.backgroundColor = picker.toHEXString();
        }
      };
}

gridContainer.onclick = () => {
    gridContainer.onmouseover = function(e){ // using Event Delegation to target newly created DOMs
        const target = e.target.closest(".grid-div");
        if (target && mouseDown) {
            target.style.backgroundColor = '#CCFFAA';        
        }
      };
};


