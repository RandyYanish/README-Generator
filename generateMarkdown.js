// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "none":
      return "";
    default:
      return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "none":
      return "";
    default:
      return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license = "none") {
    return "";
  }

  return `## License

This project is licensed under the ${license} license. See [LICENSE](${renderLicenseLink(license)}) for details.`;
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  return `# ${data.title}

${renderLicenseBadge(license)}

## Description

${data.description}

## Table of Contents:

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions?

If you have any questions, please reach out to ${data.username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
