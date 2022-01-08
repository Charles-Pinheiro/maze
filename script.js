const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let boxWin = document.createElement("div");
let message = document.createElement("p");
let restartButton = document.createElement("button");

let container = document.getElementById("container");

let player = document.createElement("div");
player.id = "p1";

let start = document.createElement("div");

const maze = (map) => {

    for (let i = 0; i < map.length; i++) {
        let line = document.createElement("div");
        line.classList.add("line");
        line.classList.add(`line${i}`);
        container.appendChild(line);

        for (let j = 0; j < map[i].length; j++) {

            if (map[i][j] === "W") {
                let wall = document.createElement("div");
                wall.classList.add("wall");
                wall.classList.add(`wall${j}`);
                line.appendChild(wall);
            }

            if (map[i][j] === "S") {
                start.classList.add("start");
                start.appendChild(player);
                line.appendChild(start);
            }

            if (map[i][j] === "F") {
                let finish = document.createElement("div");
                finish.classList.add("finish");
                line.appendChild(finish);
            }

            if (map[i][j] === " ") {
                let way = document.createElement("div");
                way.classList.add("way");
                way.classList.add(`way${j}`);
                line.appendChild(way);
            }
        }
    }
}

maze(map);

const winner = () => {
    container.appendChild(boxWin);

    message.id = "winMessage";
    message.innerHTML = "Você Venceu!"
    
    restartButton.id = "winButton";
    restartButton.innerHTML = "Recomeçar"
    
    boxWin.appendChild(message);
    boxWin.appendChild(restartButton);
}

const restartGame = () => {
    start.appendChild(player);
    container.removeChild(boxWin);
}

let counter = 0;

document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    let current = p1.parentElement;
    let next = p1.parentElement.nextSibling;
    let previous = p1.parentElement.previousSibling;
    let down = current.parentElement.nextSibling;
    let up = current.parentElement.previousSibling;

    if (keyName === "ArrowDown" && down.childNodes[counter].classList.contains("way")) {
        down.childNodes[counter].appendChild(player);
    }

    if (keyName === "ArrowUp" && up.childNodes[counter].classList.contains("way")) {
        up.childNodes[counter].appendChild(player);
    }

    if (keyName === "ArrowRight") {

        if (next.classList[0] === "way") {
            next.appendChild(player);
            counter++;
        }

        if (next.classList[0] === "finish") {
            next.appendChild(player);
            winner();
            boxWin.classList.add("win");
            // winMessage[0].classList.remove('t');
            // winMessage[0].classList.add('win');
        }
    }

    if (keyName === "ArrowLeft") {

        if (previous.classList[0] === "way") {
            previous.appendChild(player);
            counter--;
        }
    }
});

restartButton.addEventListener("click", restartGame);