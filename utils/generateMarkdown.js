// function to generate markdown for README
function generateMarkdown(data) {

  var license = ''
  if (data.license === 'Apache'){
    license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    console.log("working")
  }
  else if (data.license === 'Boost') {
    license = 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
  }
  else if (data.license === 'Eclipse') {
    license = 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
  }
  else if (data.license === 'IBM') {
    license = 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
  }
  else if (data.license === 'MIT') {
    license = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  else if (data.license === 'Mozilla') {
    license = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }
  else if (data.license === 'Perl') {
    license = 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  }
  else if (data.license === 'SIL') {
    license = 'https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg'
  }
  else if (data.license === 'Unlicense') {
    license = 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  }

  return `
  # ${data.title}

  ![License](${license})
  ## Table of Contents

  1. [Description](#description)
  2. [Installation Guide](#installation-guide)
  3. [Usage Information](#usage-information)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Test Information](test-information)
  7. [Questions](#questions)
  


  ## Description
  ${data.description}

  ## Installation Guide
  ${data.install}

  ## Usage Information
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Test Information
  ${data.tests}

  ## Questions
  ${data.github}
  ${data.email}
`;
}

module.exports = {
  generateMarkdown
};
