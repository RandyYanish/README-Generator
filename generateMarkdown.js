// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
## License\n

This project is licensed under the ${license} license. See [LICENSE](${renderLicenseLink(license)}) for details.
`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge}\n

## Description\n

${data.description}\n

### Table of Contents:\n

[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n

## Installation\n

${data.installation}\n

## Usage\n

${data.usage}\n

${renderLicenseSection(license)}\n

## Contributing\n

## Tests\n

## Questions?\n

${data.username}\n
`;
}

module.exports = generateMarkdown;
