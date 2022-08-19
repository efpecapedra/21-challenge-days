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

progressBar.setAttribute(`style`, `width:${percent}%; background-color: ${color}; border-radius: 10px`);

let textEl = document.createElement('h4');
textEl.setAttribute('style', 'text-align: right; color: white;');
textEl.appendChild(document.createTextNode(percent + '%'));
progressBar.appendChild(textEl);



