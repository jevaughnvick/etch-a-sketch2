const gridContainer = document.querySelector("#grid-container");




function createGrid(gridLength){

    let flexBasis = 100 / gridLength;

    for(let i = 0; i < gridLength ** 2; i++){

        let div = document.createElement("div");
        div.setAttribute("class", "js-made");
        div.style.cssText = `flex-basis: ${flexBasis}%;`;
        gridContainer.appendChild(div);
    }
}


createGrid(16)