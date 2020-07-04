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
        type: "list",
        message: "Please choose your license",
        choices: ["Apache", "Boost", "Eclipse", "IBM", "MIT", "Mozilla", "Perl", "SIL", "Unlicense"],
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this application?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Please provide instructions for testing this application",
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



// function to initialize program
function init() {
    inquirer.prompt(question)
    .then(data => {
    writeFileAsync("readMe.md", generate.generateMarkdown(data))
    // let license = data.license
})
.catch(console.error)}

// function call to initialize program
init();


























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


