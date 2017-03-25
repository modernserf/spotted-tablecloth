const fs = require('fs')
const watch = require('watch')

module.exports = function (filename, mapPath) {
    watch.watchTree('.', () => {
        fs.readdir("./pages", (err, storybookPages) => {
            if (err) { process.exit(1) }
            fs.readdir("./shared", (err, storybookShared) => {
                if (err) { process.exit(1) }
                storybookPages = storybookPages.map(file => `pages/${file}`)
                storybookShared = storybookShared.map(file => `shared/${file}`)
                const storybookFiles = storybookPages
                    .concat(storybookShared)
                    .filter((file) => file.match(/story/))

                const template = `export default [${
                    storybookFiles.map((file) =>
                        `require("${mapPath(file)}").default`).join(', ')
                    }];\n`
                fs.writeFile(filename, template, (err) => {
                    if (err) { process.exit(1) }
                })
            })
        })
    })
}
