const fs = require("fs")

const generate_markdown = (data) => {
    let file_markdown = "";

    Object.keys(data).forEach(key => {
        if (key === "Project Title") {
            file_markdown += `# ${data[key]}`
        } else if (key.includes("license")) {
            file_markdown += `${check_license(data[key])}`
        } else {
            file_markdown += `# ${key}\n${Array.isArray(data[key]) ? data[key][0] : data[key]}`
        }
        file_markdown += "\n"
    })
    return file_markdown
}

const generate_doc = (response_object) => {
    fs.writeFile(`Professional_README.md`, generate_markdown(response_object), "utf-8", () => {
        console.log("README Generated")
    })
}

const check_license = (license_name) => {
    // Take that string
    if (license_name == 'The MIT Licesne') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {
        return "[![License: LAAA](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    // Find the license that corresponds with that string
    // Return the license

}

module.exports = {
    generate_doc,
    check_license
}