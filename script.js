const inq = require('inquirer');
const file_helper = require("./helpers/write_file")

inq.prompt([
    {
        type: "input",
        name: "Project Title",
        message: "Enter A Project Title",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "list",
        name: "license Used",
        message: "Choose A License",
        choices: ['The MIT Licesne', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "App Description",
        message: "Enter A Description",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "Installation Instructions",
        message: "Installation Instructions",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "Usage Instructions",
        message: "Enter Usage Instructions",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "Project Contributors",
        message: "Enter Contributors",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "Tests Implemented",
        message: "Enter Tests Used",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "GitHub Username",
        message: "Enter GitHub Username",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    },
    {
        type: "input",
        name: "Email Address",
        message: "Enter Email Address",
        validate: (value) => { if (value) { return true } else { return `Must enter in a response to continue` } }
    }]).then(res => {
        console.log(res);
        file_helper.generate_doc(res)
    })