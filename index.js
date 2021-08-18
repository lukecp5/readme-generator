// TODO: Include packages needed for this application
const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
            {
                  name: "username",
                  type: "input",
                  message: "What is your GitHub username?"
            },{
                  name: "project-name",
                  type: "input",
                  message: "What is the name of your project?"            
            },{
                  name: "email",
                  type: "input",
                  message: "What is your email address?" 
            },{
                  name: "description",
                  type: "input",
                  message: "Enter a short description of your project" 
            },{
                  name: "license",
                  type: "list",
                  message: "What license would you like to use?",
                  choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "None"]
            },{
                  name: "installation",
                  type: "input",
                  message: "What command should the end user run in order to install the dependencies for your project?" 
            },{
                  name: "usage",
                  type: "input",
                  message: "What commands and/or information does the user need in order to use your project?" 
            },{
                  name: "contributions",
                  type: "input",
                  message: "What would you would like the end user to know about contributing to your repository?" 
            }
            
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions)
      .then((answers)=>
      {
            console.log("Creating README...");
      })
}

// Function call to initialize app
init();
