// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./generateMarkdown";

// TODO: Create an array of questions for user input
const questions = ['What is the Title of your project?', 'Write a short description about what your project is about:', 'How can your users install this project and use it?', 'What will this application be used for?', 'What are your guidelines for contributing to this project?', 'How can users test this project?', 'What license are you going to use?', 'What is your Github username?', 'What is your email address?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer    
        .prompt(
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test'
            },
            {
                type: 'list',
                message: questions[6],
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', ''],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
            },
        )
        // TODO: fix responses and format to write file
        .then(responses) {
            responses = data;
            writeToFile(responses.title, data);
        };
}

// Function call to initialize app
init();
