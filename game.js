console.log("We are live!");

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const form = document.getElementById("potter");
const input = document.getElementById("potter__input");
const images = document.getElementById("potter__image");

// stores displayed image data
let currentImageData = null;

// Keeps track of the user scores
let count = 0;
const scores = document.getElementById("container-scores-result");
scores.textContent = count;

// flag to track deduction status
let deductionApplied = false;

// Answer
const answer = document.getElementById("container-answer-button");

// Function to get random numbers
function getRandomNumber(max) {
    const random = Math.floor(Math.random() * max);

    return random;
}

// Function filters out empty images
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
    try {
        const character = await getRandomCharacter();

        if (character) {
            images.setAttribute("src", character.image);
            currentImageData = character;
        }
    } catch (error) {
        console.error("Error from randImag function: ",error)
    }
}
randImg();

// View answer event listener
answer.addEventListener("click", async(e) => {
    if (currentImageData) {

        // This applies the deduction only if it has not been applied
        if (!deductionApplied) {
            // Mark deduction
            count -= 2;
            scores.textContent = count;
            deductionApplied = true;
        }

        const displayedImageName = currentImageData.name.trim();

        if (answer.textContent.includes("ANSWER")) {
            answer.innerHTML = `${displayedImageName} <i class="container__answer-icon fa fa-eye-slash" id="container-answer-icon"></i> <span class="container__answer-button-span-tooltiptext">Penalty: -2 points</span>`;
        } else {
            answer.innerHTML = 'ANSWER <i class="container__answer-icon fa fa-eye" id="container-answer-icon"></i> <span class="container__answer-button-span-tooltiptext">Penalty: -2 points</span>';
        }

    } else {
        console.error("No image is currently displayed.");
    }
});

// Event handler for the form submit button
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    // Clears previous error states
    input.classList.remove("container__potter-button-error");

    const nameInput = e.target.character.value.trim().toLowerCase();

    // Validation for input
    if (nameInput === "") {
        input.classList.add("container__potter-button-error");
        return;
    }

    if (currentImageData) {
        const displayedImageName = currentImageData.name.trim().toLowerCase();
    
        if (displayedImageName === nameInput) {

            // Updates the users score
            count += 5;
            scores.textContent = count;

            alert("Good job!!!");

            // Resets the "Answer" button to its original state
            answer.innerHTML = 'ANSWER <i class="container__answer-icon fa fa-eye" id="container-answer-icon"></i> <span class="container__answer-button-span-tooltiptext">Penalty: -2 points</span>';

            // Displays new random image
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
