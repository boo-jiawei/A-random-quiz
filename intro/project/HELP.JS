const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const notesContainer = document.getElementById("notes-list");

const saveNote = () => {
  const noteInputValue = noteInput.value;
  if (noteInputValue === "") {
    console.log("no value");
    return null; // function stops here
  }
  const noteElement = document.createElement("div");
  noteElement.classList.add("note-child");
  noteElement.textContent = noteInputValue;

  notesContainer.appendChild(noteElement);
};