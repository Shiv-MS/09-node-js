const fs = require("fs")

const generate_markdown = (data) => {
    let file_markdown = ``;
    Object.keys(data).forEach(key => {
        file_markdown += `# ${key}
        
        ${Array.isArray(data[key]) ? data[key][0] : data[key]}`
    })
    return file_markdown
}

const generate_doc = (response_object) => {
    fs.writeFile(`Professional_README.md`, generate_markdown(response_object), "utf-8", () => {
        console.log("README Generated")
    })
}

module.exports = {
    generate_doc
}