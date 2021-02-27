// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'project',
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
    message: 'What are the command installation instructions?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Are there any limitations for usage?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines if any.'
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions if any.'
},
{
    type: 'list',
    name: 'liscense',
    message:'What kind of license?',
    choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'Other', 'None' ]
},
{
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
    type: 'options',
    name: 'reachME',
    message: 'What is the best way to reach you?'
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
