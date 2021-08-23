// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// + Array of questions to be asked of the user. We will use the various answers from the inquirer prompts to populate the sections of our generated readme.md(${projectTitle}.md)
const readmeInfo = [
            {
                  name: "username",
                  type: "input",
                  message: "What is your GitHub username?"
            },{
                  name: "projectTitle",
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
            },
            {
                  type: "list",
                  name: "license",
                  message: "What license would you like to use?",
                  choices: [ "APACHE 2.0", "BSD 3", "GPL 3.0", "IPL 1.0", "ISC", "MIT", "MPL 2.0", "Unlicense", "No License"],
            },{
                  type: "input",
                  name: "installation",
                  message: "What command should the end user run in order to install the dependencies for your project?",
                  default: "npm install"
            },{
                  type: "input",
                  name: "test",
                  message: "How should users invoke the testing for your application?",
                  default: "npm test"
            },{
                  type: "input",
                  name: "usage",
                  message: "What commands and/or information does the user need in order to use your project?" 
            },
            {
                  type: "input",
                  name: "contributions",
                  message: "How can other developers contribute to your repository?",
            }
            
];


// TODO: Create a function to initialize app
function init() {
      // console.log(`WARNING: If you run this in your projects directory, your existing README.md file will be overwritten with your generated README.md.`)
      inquirer
      .prompt(readmeInfo)
      .then((answers)=>
      {
            const {username, projectTitle:title} = answers;
            console.log(`USERNAME: ${username} PROJECT NAME: ${title}`) 
            generateMarkdown(answers);
            console.log("Your readme has been generated in the current directory with the filename README.md");
            writeToFile(answers);
            return answers;
      })
      .catch((error) => {
            if(error.isTtyError){
                  console.log("Prompt couldn't be rendered in the current environment")
            }else{
                  console.log(error);
            }
      })
}
// TODO: Create a function to write README file
// + Function that takes the username or projectTitle from the answers, and creates a file `${username}.md` to hold the generated markdown. This writeToFile function also calls the generateMarkdown function, passing it the data received from the inquirer prompts as 'data' */
function writeToFile(data){
      const {username, projectTitle:pt} = data;
      fs.writeFile(`${pt}.md`, generateMarkdown(data), (err) => {
            err?console.log(err):console.log(`Success! We have successfully generated your README as ${pt}.md`);
      })
}

// Function call to initialize app
init();
