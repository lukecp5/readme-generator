// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseURLS = {
  MIT: 'https://opensource.org/licenses/MIT',
  ISC: 'https://opensource.org/licenses/ISC',
  'APACHE 2.0' : 'https://opensource.org/licenses/Apache-2.0',
  
}
function renderLicenseBadge(license) { 
  if(license != "None"){
    switch(license){
    case 'MIT':
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
