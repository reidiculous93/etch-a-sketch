const container = document.querySelector('#container');
const btn = document.querySelector('#clear');

window.addEventListener("load", createGrid(16));

function createGrid(size){
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
for(let i = 0; i < size * size; i++){
const div = document.createElement("div");
div.classList.add("child");
container.appendChild(div);
}
}

function resizeGrid(){
let resize = prompt("How many squares per column and row?");
resize = parseInt(resize);
createGrid(resize);
}

const gridItems = document.querySelectorAll('.child');
gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('childHover');
    })  
});

btn.addEventListener('click', () => {
    gridItems.forEach((item) => {
            container.removeChild(item);
        });
    resizeGrid();
});