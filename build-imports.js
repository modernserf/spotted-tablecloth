const fs = require('fs')

module.exports = function (filename, mapPath) {
    const storybookPages = fs.readdirSync("./pages")
        .map(file => `pages/${file}`)
    const storybookShared = fs.readdirSync("./shared")
        .map(file => `shared/${file}`)

    const storybookFiles = storybookPages
        .concat(storybookShared)
        .filter((file) => file.match(/story/))

    const template = `export default [${
        storybookFiles.map((file) =>
            `require("${mapPath(file)}").default`).join(', ')
        }];\n`
    fs.writeFileSync(filename, template)
}
