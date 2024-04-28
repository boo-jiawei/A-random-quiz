const heading = document.getElementById("heading")
const sizebtn = document.getElementById("help")
console.log(sizebtn)
// event handler
// sizebtn.onclick = () => {
// changesize();
//}

// getElementbyId => return element for the spesific ID

// innerHTML => retrn or alter the value inside an element

//event listeners
sizebtn.addEventListener("click", () => {
    help()
})

sizebtn.addEventListener("click", help)


function EditText() {
    const userinput = document.getElementById("input").value
    heading.innerHTML = userinput
}

function changecolor() {

    let currentcolor = heading.innerHTML;
    if (currentcolor === "red" || currentcolor === "blue" || currentcolor === "green") {
        heading.style.color = currentcolor
    } else {
        heading.style.color = "black";
    }
}

    function help() {
        heading.style.fontSize = "60px";
    }
