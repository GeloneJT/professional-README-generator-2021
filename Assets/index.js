// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions on how to use your project and get it running?",
  },
  {
    type: "input",
    name: "credit",
    message: "Provide a list of collaborators if any.",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions if any.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license?",
    choices: [
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Apache",
        value:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "GNU GPLv2",
        value:
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
      },
      {
        name: "GNU GPLv3",
        value:
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      },
      {
        name: "BSD 3-clause",
        value:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "WTFPL",
        value:
          "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
      },
      {
        name: "None",
        value: "", }],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is you email",
  },
  {
    type: "options",
    name: "reachME",
    message: "What is the best way to reach you?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
