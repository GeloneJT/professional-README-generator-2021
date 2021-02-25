// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils')
// TODO: Create an array of questions for user input
const questions = [{
     type: 'input',
     name: 'github',
     message: 'What is your Github username?'
},
{
    type:'input',
    name: 'email',
    message: 'What is you email'
},
{
    type: 'list',
    name: 'liscense',
    message:'What kind of license?',
    choices: ['mit', 'etc']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerRespinses) =>{
    writeToFile('README.md', generateMarkdown({...inquirerRespinses}))
    })
}

// Function call to initialize app
init();
