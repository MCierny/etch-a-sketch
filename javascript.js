const btnGrid = document.getElementById('btn-grid');
const btnReset = document.getElementById('btn-reset');
const btnErase = document.getElementById('btn-erase');
const btnRandom = document.getElementById('btn-random');
const btnColor = document.getElementById('btn-color');
const gridContainer = document.querySelector('.grid-container');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


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
            // gridDiv.addEventListener('mousemove', function (event) {
            // gridDiv.classList.add('grid-after');
            // });
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

btnReset.addEventListener('click', () => {
    clearGrid();
    drawGrid();
});

btnErase.onclick = () => {
    document.onmouseover = function(e){
        const target = e.target.closest(".grid-div");
        if (target) {
            target.style.backgroundColor = 'white';        
        }
      };
};

btnRandom.onclick = () => { 
    document.onmouseover = function(e){
        const target = e.target.closest(".grid-div");
        const randomColor = '#'+(Math.floor(Math.random()*16777215).toString(16));
        if (target) {
            target.style.backgroundColor = randomColor;
        }
      };
};


// btnErase.onclick = () => {
//     document.onmousemove = function(e){
//         const target = e.target.closest(".grid-div");
//         if (target) {
//             target.classList.remove('grid-after-black')
//             target.classList.add('grid-after-white');
//         }
//       };
// };

// btnRandom.onclick = () => {
//     document.onmousemove = function(e){
//         const target = e.target.closest(".grid-div");
//         if (target) {
//             target.classList.remove('grid-after-white')
//             target.classList.add('grid-after-black');
//         }
//       };
// };

// btnErase.addEventListener('click', () => {
//     document.addEventListener("mousemove", function(e){
//         const target = e.target.closest(".grid-div");
//         if (target) {
//             target.classList.add('grid-after-white');
//         }
//       });
// });

// btnRandom.addEventListener('click', () => {
//     document.addEventListener('mousemove', function(e){
//         const target = e.target.closest(".grid-div");
//         if (target) {
//             target.classList.add('grid-after-black');
//         }
//       });
// });


