// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions  = [
    inquirer.prompt([
        {
            type : 'input',
            message : 'What is your project title?',
            name : 'title',
        },
        
        {
            type : 'input',
            message : 'Please write a description of your project.',
            name : 'description',
        },
        
        {
            type : 'input',
            message : 'Are any installations processes required if any:',
            name : 'installation',
        },
        
        {
            type : 'input',
            message : 'What is your project used for?',
            name : 'usage',
        },
        
        {
            type : 'list',
            message : 'Select licenses utilized by this project',
            name : 'license',
            choices: [
                'MIT',
                'GPL',
                'Apache'
            ]
        },

        {
            type : 'input',
            message : 'Who are the contributors of this project?',
            name : 'contributing',
        },

        {
            type : 'input',
            message : 'What tests were performed?',
            name : 'tests',
        },
        
        {
            type : 'input',
            message : 'What to do if an issue arises?',
            name : 'questions',
        },

        {
            type : 'input',
            message : 'What is your Github username?',
            name : 'username',
        },

        {
            type : 'input',
            message : 'What is your email?',
            name : 'email',
        }
    ])
]

console.log(questions)
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
