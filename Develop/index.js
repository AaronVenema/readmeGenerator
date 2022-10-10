const fs = require('fs')
const util =require('util')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const writeFileAsync= util.promisify(fs.writeFile)

function userPrompt(){

   return inquirer.prompt([
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
}


async function init(){
try{
    const answers = await userPrompt ();
    const generateStuff= generateMarkdown(answers);
    await writeFileAsync ('./dist/README.md', generateStuff)
}
    catch(err){
        console.log(err)
    }
}

init()
