const gridDiv = document.querySelector("#grid");

function createGrid(amount) {
    
    gridDiv.textContent = "";

    for (i = 0; i !== amount * amount; ++i) {
        
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.flexBasis = 100 / amount + "%";
        gridDiv.appendChild(gridElement);

    }

}

createGrid(16);