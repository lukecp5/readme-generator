const licenseURLS = {
  MIT: "https://opensource.org/licenses/MIT",
  ISC: "https://opensource.org/licenses/ISC",
  "APACHE 2.0": "https://opensource.org/licenses/Apache-2.0",
  "BSD 3": "https://opensource.org/licenses/BSD-3-Clause",
  "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
  "IPL 1.0": "https://opensource.org/licenses/IPL-1.0",
  "MPL 2.0": "https://opensource.org/licenses/MPL-2.0",
  "Unlicense": "http://unlicense.org/"
};
// TODO: Create a function that returns a license badge based on which license is passed in
// ! If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None"){

  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)};

  ## Description

  ## Installation

  ## Usage

  ## Contributing

`;
}

module.exports = generateMarkdown;
