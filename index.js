// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);
// function promptUser() {
   const question = [
    {
        type: "input",
        message: "What is the title of your application",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your application",
        name: "description"
    },
    {
        type: "checkbox",
        message: "Which sections of the following will you be using?",
        choices: ["Description", "Installation", "Usage", "Liscense", "Contributing", "Tests", "Questions"],
        name: "table"
    },
    {
        type: "input",
        message: "Please enter instructions for installation",
        name: "install"
    },
    {
        type: "input",
        message: "Please describe how to use your application",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter License",
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this application?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How would you like this application to be tested?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
    ]
    // .then (data => {
    //     const md = generateMarkdown(data);
    //     writeFileAsync("README.md", md)
    // })
// }


// promptUser()
//     .then  (data => {
//         var md = generateMarkdown(data);
//         writeFileAsync("README.md", md)
// })

// function to write README file
function writeToFile(file, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(question)
    .then(data => {
    writeFileAsync("readMe.md", generate.generateMarkdown(data))
})
.catch(console.error)}

// function call to initialize program
init();
