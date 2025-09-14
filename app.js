let checkmate = document.getElementById("task-input");
let text = document.getElementById("task-text");
let editbtn = document.getElementById("edit-task-btn");
let clearbtn = document.getElementById("clear-task-btn");

checkmate.addEventListener("change", function() {
    if (checkmate.checked) {
        text.style.textDecoration = "line-through";
    } else {
        text.style.textDecoration = "none";
    }
});