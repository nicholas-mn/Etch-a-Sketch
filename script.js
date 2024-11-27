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

createGrid(16);