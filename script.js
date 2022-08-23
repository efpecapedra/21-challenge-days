let button = document.querySelectorAll(".button-mode:not([disabled])");
let percent = (button.length - 1) * 5;

let color;

switch (percent) {
    case 5:
        color = "darkred";
        break;
    case 10:
        color = "firebrick";
        break;
    case 15:
        color = "crimson";
        break;
    case 20:
        color = "red";
        break;
    case 25:
        color = "orangered";
        break;
    case 30:
        color = "tomato";
        break;
    case 35:
        color = "coral";
        break;
    case 40:
        color = "darkorange";
        break;
    case 45:
        color = "orange";
        break;
    case 50:
        color = "gold";
        break;
    case 55:
        color = "khaki";
        break;
    case 60:
        color = "yellow";
        break;
    case 65:
        color = "greenyellow";
        break;
    case 70:
        color = "palegreen";
        break;
    case 75:
        color = "lawngreen";
        break;
    case 80:
        color = "lime";
        break;
    case 85:
        color = "limegreen";
        break;
    case 90:
        color = "forestgreen";
        break;
    case 95:
        color = "green";
        break;  
    case 100:
        color = "darkgreen";
        break;  
    default: 
        color = "black"
        break;
}

let progressBar = document.getElementById("progressBar");

progressBar.setAttribute(`style`, `width:${percent}%; background-color: ${color}; border-radius: calc(1vw)`);

let textEl = document.createElement('h4');
textEl.setAttribute('style', 'text-align: right; color: white;');
textEl.appendChild(document.createTextNode('PROGRESS ' + percent + '%'));
progressBar.appendChild(textEl);



let button2 = document.querySelectorAll(".button-mode:not([checked])");
let percent2 = (button2.length - 1) * 5;

let color2;

switch (percent2) {
    case 5:
        color2 = "darkred";
        break;
    case 10:
        color2 = "firebrick";
        break;
    case 15:
        color2 = "crimson";
        break;
    case 20:
        color2 = "red";
        break;
    case 25:
        color2 = "orangered";
        break;
    case 30:
        color2 = "tomato";
        break;
    case 35:
        color2 = "coral";
        break;
    case 40:
        color2 = "darkorange";
        break;
    case 45:
        color2 = "orange";
        break;
    case 50:
        color2 = "gold";
        break;
    case 55:
        color2 = "khaki";
        break;
    case 60:
        color2 = "yellow";
        break;
    case 65:
        color2 = "greenyellow";
        break;
    case 70:
        color2 = "palegreen";
        break;
    case 75:
        color2 = "lawngreen";
        break;
    case 80:
        color2 = "lime";
        break;
    case 85:
        color2 = "limegreen";
        break;
    case 90:
        color2 = "forestgreen";
        break;
    case 95:
        color2 = "green";
        break;  
    case 100:
        color2 = "darkgreen";
        break;  
    default: 
        color2 = "black"
        break;
}

let progressBar2 = document.getElementById("progressBar2");

progressBar2.setAttribute(`style`, `width:${percent2}%; background-color: ${color2}; border-radius: calc(1vw); opacity: 0.5;`);

let textEl21 = document.createElement('h4');
textEl21.setAttribute('style', 'text-align: right; color: white;');
textEl21.appendChild(document.createTextNode('CHALLENGES  ' + percent2 + '%'));
progressBar2.appendChild(textEl21);