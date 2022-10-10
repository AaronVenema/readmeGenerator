function generateMarkdown(answers) {
return `
<h1 align="center">${answers.title}</h1>

## Description
  ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## License
  ${answers.license} 
## Contributing
  ${answers.contributing}
## Tests
  ${answers.tests}
## Questions
  ${answers.questions}

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

 Contact me with any questions: ${answers.email}`;
}
  
module.exports = generateMarkdown;
