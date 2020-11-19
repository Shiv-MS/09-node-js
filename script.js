const inq = require('inquirer');
const file_helper = require("./helpers/write_file")

inq.prompt ([
    {
        type: "input",
        name: "projectTitle",
        message: "Enter A Project Title",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "description",
        message: "Enter A Description",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Instructions",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "list",
        name: "license",
        message: "Choose A License",
        choices:['The MIT Licesne', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter Contributors",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "tests",
        message: "Enter Tests Used",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter GitHub Username",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email Address",
        validate: (value)=>{if(value){return true} else {return `Must enter in a response to continue`}}
    }]).then(res => {
        console.log(res);
        file_helper.generate_doc(res)
    })