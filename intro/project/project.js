const noteInput = document.getElementById("note-input")
const saveBtn = document.getElementById("save-btn")

const saveNote = () => {
    const noteInputvalue = noteInput.ariaValueMax.trim()
    if (noteInputvalue === '') {
        return null
    }


    const noteElement = document.createElement("div")
    noteElement.classList.add("note-child")
    noteElement.textContent = noteInputvalue

    notescontainer.appendChild(noteElement);
};