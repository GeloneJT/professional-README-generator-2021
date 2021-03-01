// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Email](#email)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  To start using this code follow these instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credit
  ${data.credit}

  ## Tests
  ${data.tests}

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

  ## Questions
  ${data.reachME}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
