console.log("We are live!");

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const form = document.getElementById("potter");
const input = document.getElementById("potter__input");
const images = document.getElementById("potter__image");

// stores displayed image data
let currentImageData = null;

// Function to get random numbers
// Rather than hardcoding the length, chatGPT suggested
// we get the value from the api call
function getRandomNumber(max) {
    const random = Math.floor(Math.random() * max);

    return random;
}

// Function filters out empty images data
async function getHarry() {
    try {
        const response = await axios.get(BASE_URL);
        const data = response.data;

        // Filter the data to include only objects with a non-empty image property
        const filteredData = data.filter(
            (res) => res.image && res.image.trim() !== ""
        );

        const newArray = filteredData.map(({name, image}) =>  ({name, image}));

        // Returns the filtered data
        return newArray;
    } catch (error) {
        console.error(error);
    }
}

// Get random data from the filtered data with an image
async function getRandomCharacter() {
    try {
        const response = await getHarry();

        // the value passed was gotten from the response length
        const randNum = getRandomNumber(response.length);

        const resRandom = response[randNum];
        console.log(resRandom);

        return resRandom;

    } catch (error) {
        console.error(error);
    }
}

// Function displays a random image
async function randImg() {
    const character = await getRandomCharacter();

    if (character) {
        images.setAttribute("src", character.image);
        currentImageData = character;
    }

}
randImg();

// Event handler for the form submit button
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    // Clears previous error states
    input.classList.remove("potter__error");

    const nameInput = e.target.character.value.trim().toLowerCase();

    // Validation for input
    if (nameInput === "") {
        input.classList.add("potter__error");
        return;
    }

    if (currentImageData) {
    const displayedImageName = currentImageData.name.trim().toLowerCase();

    if (displayedImageName === nameInput) {
        alert("Good job!!!");

        // calls the function again to display new image
        randImg();

        // clears the input field
        e.target.character.value = "";
    } else {
        alert("Retry");
    }
    } else {
        console.error("No image is currently displayed.");
    }
});
