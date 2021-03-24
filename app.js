const container = document.querySelector('#container');
const btn = document.querySelector('#clear');

window.addEventListener("load", createGrid(16));

function createGrid(size){
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
for(let i = 0; i < size * size; i++){
const div = document.createElement("div");
div.classList.add("child");
container.appendChild(div);
div.addEventListener('mouseover', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+r+","+g+","+b+")"
    div.style.backgroundColor =  `${color}`;
});  
};
};

function resizeGrid(){
let resize = prompt("How many squares per column and row?");
resize = parseInt(resize);
if(resize != null && resize < 100){
createGrid(resize);
} else {
    createGrid(16);
    alert("Please enter a valid number less than 100!");
} 
}

btn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.child');
    gridItems.forEach((item) => {
            container.removeChild(item);
        });
    resizeGrid();
});