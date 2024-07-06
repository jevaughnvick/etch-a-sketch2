const gridContainer = document.querySelector("#grid-container");
const makeGridBtn = document.querySelector("#make-grid");


makeGridBtn.addEventListener("click", showPopupforGridLength);

function createGrid(gridLength){

    gridContainer.innerHTML = "";

    let flexBasis = 100 / gridLength;

    for(let i = 0; i < gridLength ** 2; i++){

        let div = document.createElement("div");
        div.setAttribute("class", "js-made");
        div.style.cssText = `flex-basis: ${flexBasis}%;`;
        div.onmouseover = e => {

            e.target.setAttribute("class", "hovered");
        };
        gridContainer.appendChild(div);
    }
}

function showPopupforGridLength(){

    while (true) {
        const gridLength = prompt("Enter number of squares (per side): ", "");
        if(gridLength > 100){
            alert("Each side should total 100 squares or less.");
        }else if(gridLength === null){
            break;
        }else{
            createGrid(gridLength);
            break;
        }
    }
}