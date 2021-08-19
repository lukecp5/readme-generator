// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// + Array of questions to be asked of the user. We will use the various answers from the inquirer prompts to populate the sections of our generated readme.md(${projectTitle}.md)
const questions = [
  {
    name: "fileLocation",
    type: "checkbox",
    message: "Where would you like to create your generated README file.",
    choices: [
      [`Current Directory as[project-title].md`, "CurrentDir"],
      `In project folder (./[project-title]/README.md)`,
    ],
  },
  {
    name: "username",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "projectTitle",
    type: "input",
    message: "What is the name of your project?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "description",
    type: "input",
    message: "Enter a short description of your project",
  },
  {
    name: "license",
    type: "list",
    message: "What license would you like to use?",
    choices: [
      "MIT",
      "ISC",
      "APACHE 2.0",
      "BSD 3",
      "GPL 3.0",
      "IPL 1.0",
      "MPL 2.0",
      "Unlicense",
      "None",
    ],
  },
  {
    name: "installation",
    type: "input",
    message:
      "What command should the end user run in order to install the dependencies for your project?",
  },
  {
    name: "usage",
    type: "input",
    message:
      "What commands and/or information does the user need in order to use your project?",
  },
  {
    name: "contributions",
    type: "input",
    message:
      "What would you would like the end user to know about contributing to your repository?",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { username, projectTitle: title } = answers;
      console.log(`USERNAME: ${username} PROJECT NAME: ${title}`);
      console.log(generateMarkdown(answers));
      console.log("Creating README...");
      writeToFile(answers);
      return answers;
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(error);
      }
    });
}
// + Function that takes the username or projectTitle from the answers, and creates a file `${username}.md` to hold the generated markdown. This writeToFile function also calls the generateMarkdown function, passing it the data received from the inquirer prompts as 'data' */
function writeToFile(data) {
  const { username, projectTitle: pt } = data;
  console.log(`Inside Write to file:${username}`);
  fs.writeFile(generateFileName(data), generateMarkdown(data), (err) => {
    err
      ? console.log(err)
      : console.log(
          `Success! We have successfully generated your README.md in /${pt}/README.md`
        );
  });
}

const generateFileName = (data) => {
  if ((data.fileLocation = `CurrentDir`)) {
    console.log(data.fileLocation);
  }
};

// Function call to initialize app
init();
