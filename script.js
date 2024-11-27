const gridDiv = document.querySelector("#grid");
const resetGridBtn = document.querySelector(".reset");
const createNewGridSizeBtn = document.querySelector(".createNew");

let currentGridSize = 0;

function createGrid(amount) {
    
    gridDiv.textContent = "";

    for (i = 0; i !== amount * amount; ++i) {
        
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.flexBasis = 100 / amount + "%";

        gridElement.addEventListener("mouseover", () => {
            gridElement.style.backgroundColor = "black";
        });

        gridDiv.appendChild(gridElement);

    }

    currentGridSize = amount;

}

resetGridBtn.addEventListener("click", () => {
    createGrid(currentGridSize);
});

createNewGridSizeBtn.addEventListener("click", () => {
    
    const newGridSize = prompt("Choose size grid. Needs to be a number. Example: 10 = 10x10")

    if (isNaN(newGridSize) === true) {
        alert("Needs to be a number, try again.")
        return;
    } else if (newGridSize > 100) {
        alert("Needs to 100 or less, try again")
        return;
    } else if (newGridSize === undefined || newGridSize === null || newGridSize === "") {
        console.log("Choose new grid size: no input")
        return;
    }

    createGrid(newGridSize);

});

createGrid(16);