// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project.'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project and get it running?'
},
{
    type: 'input',
    name: 'credit',
    message: 'Provide a list of collaborators if any.'
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions if any.'
},
{
    type: 'list',
    name: 'license',
    message:'What kind of license?',
    choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'Other', 'None' ]
},
{
    type: 'input',
     name: 'github',
     message: 'What is your GitHub username?'
},
{
    type:'input',
    name: 'email',
    message: 'What is you email'
},
{
    type: 'options',
    name: 'reachME',
    message: 'What is the best way to reach you?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
    writeToFile('README.md', generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
