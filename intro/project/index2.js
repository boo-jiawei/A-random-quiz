const jokebtn = doument.getElementById("get-joke")
const memebtn = doument.getElementById("get-meme")

const jokeContainer = document.querySelector("joke-content")
const memeContainer = document.querySelector("meme-content")

const jokes = ["joke 1", "joke 2", "joke 3"]
const memes = ["meme1.jpg","meme2.jpg","meme3.jpg"]

let joke;

const generateJoke = () => {
    joke = jokes[Math.floor(Math.random() * jokes.length)];

    jokeContainer.innerHTML = joke
};

const generateMeme = () => {
    meme = memes[Math.floor(Math.random() * memes.length)];

    const newMeme = document.createElement("img");
    newMeme.setAttribute("src",meme);
    memeContainer.innerHTML ="null";

    memeContainer.appendChild(newMeme);
};

jokebtn.addEventListener("click", generateJoke);
memebtn.addEventListener("click", generateMeme);