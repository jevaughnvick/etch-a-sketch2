const gridContainer = document.querySelector("#grid-container");

let gridLength = 9;

const numberOfDivs = gridLength ** 2;

let flexBasis = 100 / gridLength;

for(let i = 0; i < numberOfDivs; i++){



    let div = document.createElement("div");
    div.setAttribute("class", "js-made");
    div.style.cssText = `flex-basis: ${flexBasis}%;`;
    gridContainer.appendChild(div);
}