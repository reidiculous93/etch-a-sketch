const container = document.querySelector('#container');
const btn = document.querySelector('#clear');

function gridPrompt() {
    let userGrid = prompt("How many squares per side would you like in your grid?");
    for(let i = 0; i < userGrid; i++){
        const div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "black";
        div.classList.add("child");
        
        container.appendChild(div);
        }
}

for(let i = 0; i < 256; i++){
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "black";
div.classList.add("child");

container.appendChild(div);
}

const divs = document.querySelectorAll('.child');
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('childHover');
    })  
});

btn.addEventListener('click', () => {
    divs.forEach((div) => {
            div.classList.remove('childHover');
        }) 
    gridPrompt();
});