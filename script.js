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

let container = document.getElementById("container");

let player = document.createElement("div");
player.id = "p1";

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
                let start = document.createElement("div");
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

let counter = 0;