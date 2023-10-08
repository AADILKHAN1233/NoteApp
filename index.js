const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = " data:image/png;base64,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"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();

    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})