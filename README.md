# Guess the Character Name: Harry Potter Edition ⚡

Welcome to **Guess the Character Name: Harry Potter Edition**! This is a fun and interactive web-based game where players guess the names of Harry Potter characters based on their images. It was developed as part of a hackathon project, showcasing creativity, problem-solving, and technical skills.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

This project is a web-based game where players are presented with an image of a Harry Potter character and must guess the character's name. The game fetches character data from the Harry Potter API and dynamically displays random character images. Players earn points for correct guesses and can reveal the answer with a penalty.

## Features

- **Random Character Images**: Fetches and displays random Harry Potter character images from the API.
- **Score Tracking**: Keeps track of the player's score, awarding points for correct guesses and deducting points for revealing answers.
- **Answer Reveal**: Players can reveal the character's name with a penalty of ```-2``` points.
- **Input Validation**: Ensures the player enters a valid guess before submitting.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## How to Play

1. **Start the Game**: Open the game in your browser.
2. **Guess the Character**: Enter the name of the character displayed in the image.
3. **Submit Your Guess**: Click the "SUBMIT" button to check your answer.
   - If correct, you earn 5 points and a new character image is displayed.
   - If incorrect, you can try again.
4. **Reveal the Answer**: If you're stuck, click the "ANSWER" button to reveal the character's name. This will deduct 2 points from your score.
5. **Keep Playing**: Continue guessing characters to increase your score!

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Sass
- **API**:
  - Harry Potter API for fetching character data.
  ```https://hp-api.onrender.com/api/characters```
- **Libraries**:
  - Axios for making HTTP requests.
  - Font Awesome for icons.
- **Tools**:
  - Git for version control.
  - GitHub for project hosting.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AlexandriaBalkaran/Harry-Potter-Game
   cd Harry-Potter-Game
2. **Set Up Sass Compilation**:
   - **Install the Live Sass Compiler Extension**:
     - Open Visual Studio Code.
     - Press `Ctrl+P`, type `ext install glenn2223.live-sass`, and press Enter. Alternatively, you can install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass).
   - **Start Watching Sass Files**:
     - Open your `.scss` file in VS Code.
     - Click on the "Watch Sass" button in the status bar at the bottom to start live compilation.
3. **Open the Project**:
    ```Open the index.html file in your browser```
4. **Play the Game**:
    ```Start guessing Harry Potter characters and have fun!```

## Future Improvements

Here are some ideas for future enhancements:

- **Difficulty Levels**: Add different difficulty levels (e.g., easy, medium, hard) with varying point systems.
- **Timer**: Introduce a timer to add a challenge (e.g., guess within 10 seconds).
- **Leaderboard**: Implement a leaderboard to track high scores.
- **More Feedback**: Provide hints or clues for difficult characters.
- **Mobile App**: Develop a mobile app version for iOS and Android.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:
1. **Fork the repository**.
2. **Create a new branch for your feature or bugfix**:
    ```git checkout -b feature/your-feature-name```
3. **Commit your changes**:
    ```git commit -m "Add your commit message here"```
4. **Push to the branch**:
    ```git push origin feature/your-feature-name```
5. **Open a pull request on GitHub**.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.

## Acknowledgments
- **[Harry Potter API](https://hp-api.onrender.com/api/characters)**: For providing the character data.
- **Font Awesome**: For the eye and eye-slash icons.
- **Brainstation**: For organizing, inspiration and support during the hackathon.

Enjoy the game! ✨
