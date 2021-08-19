const licenseURLS = [
  {
  'license' : 'MIT',
  'url' : "https://opensource.org/licenses/MIT"
  },{
  'license' : 'ISC',
  'url' : "https://opensource.org/licenses/ISC"
},{
  'license' : 'APACHE 2.0',
  'url' : "https://opensource.org/licenses/Apache-2.0"
},{
  'license' : 'BSD 3',
  'url' : "https://opensource.org/licenses/BSD-3-Clause"
},{
  'license' : 'GPL 3.0',
  'url' : "https://www.gnu.org/licenses/gpl-3.0"
},{
  'license' : 'IPL 1.0',
  'url' : "https://opensource.org/licenses/IPL-1.0"
},{
  'license' : 'MPL 2.0',
  'url' : "https://opensource.org/licenses/MPL-2.0"
},{
  'license' : 'Unlicense',
  'url' : "http://unlicense.org/"
}
];

// TODO: Create a function that returns a license badge based on which license is passed in
// ! If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    if(license.indexOf(' ') >= 0){
    let fixedLicense = license.split(' ');
    const [a,b] = fixedLicense;
    let accURL = `${a}%20${b}`
    return `![GitHub license](https://img.shields.io/badge/license-${accURL}-blue.svg)`;
  }else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }}
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None"){
    return `\n* [License](#license)\n`
  }
  return ``;
}

// Function to get the URL of the user's selected license
function renderLicenseURL(license){
  if(license != 'None'){
    for(i=0; i< licenseURLS.length; i++){
      if(licenseURLS[i].license == license){
        return `[${license} License](${licenseURLS[i].url})`
      }
    }
    return '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license ? `  
  ## License 
  This project is license under the ${renderLicenseURL(license)}` : ``);
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {license, description, username, projectTitle:title, email, installation, usage, contributions, test} = data;
  return `# **${title}**
  ${renderLicenseBadge(data.license)}       
  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  Run the following command to install the necessary dependencies:
  ~~~
  ${installation}
  ~~~
  ## Usage
  ~~~
  ${usage}
  ~~~
  ## Contributing
  ${contributions}
  ${renderLicenseSection(license)}
  ## Tests
  This is the command to run for testing:   
  ~~~
  ${test}
  ~~~
  ## Questions
  If you have questions about the project or repository, feel free to open an issue in the repository or contact me directly at ${email}. You can find more of my work on my GitHub: [${username}](https://github.com/${username}).
`;
}

module.exports = generateMarkdown;
