
let deg = -35;
    for (let i = 1; i <= 23; i++) {
        let div = document.querySelector(".error div:nth-child(" + i + ")");
        div.style.transform = 'rotate(' + deg + 'deg)';
        deg = deg + 15;
    }


let deg02 = 145;
    for (let i = 1; i <= 23; i++) {
        let div = document.querySelector(".back div:nth-child(" + i + ")");
        div.style.transform = 'rotate(' + deg02 + 'deg)';
        deg02 = deg02 + 15;
    }
