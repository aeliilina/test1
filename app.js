var color = prompt("Введите цвет светофора (красный, желтый или зеленый):");
var body = document.querySelector('body');


if (color === "красный") {
    alert("Стой!");
    body.style.backgroundColor = "red";
} else if (color === "желтый") {
    alert("Жди!");
    body.style.backgroundColor = "yellow";
} else if (color === "зеленый") {
    alert("Иди!");
    body.style.backgroundColor = "green";
} else {
    alert("Некорректный цвет!");
}