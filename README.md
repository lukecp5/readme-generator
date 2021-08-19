# README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
README Generator was created as a solution to the problem that many developers face - Writing a README for every new project they create. This is a CLI(Command Line Interface) application that generates a styled comprehensive README.md file, based on the users entries into the command-line prompts. This application uses inquirer to prompt the user with a series of questions: GitHub Username, Email Address, Project Name, Project Description, License, dependencies, tests, usage information, and contributing to the project. After the user has answered all of the questions in the command-line, a README.md will be created inside the current working directory with the answers to the earlier questions embedded inside the applications README template.

[GIF of application in action here]

## Table of Contents
* [Installation](#installation)
* [Usage](#installation)
* [Technologies](#technologies)
* [License](#installation)
* [Contributing](#installation)
* [Installation](#installation)

### Installation
To install this application and its dependencies, simply run these commands in the directory that you'd like the application to reside in(from the command-line):
  git clone git@github.com:lukecp5/readme-generator.git
  cd readme-generator
  npm install
[Installation Image here]

### Usage
You will use Node.js to run the application once you have it cloned and all of the depencies installed. Enter this command inside the readme-generator directory:
  node index.js
Upon running the application, you will be presented with a series of questions about yourself and your project. Fill in your answers for each question, pressing enter after you've completed each answer. Once you have filled in all of the answers, a README.md file will be created in your current working directory.
[Usage Example image here]

## Technologies Used
  - Node.js
  - Inquirer(npm package)
  - fs(built-in npm package)
  - path(built-in npm package)

### License 
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

### Contributing
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes
