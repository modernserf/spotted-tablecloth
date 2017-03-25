const next = require('next');
const express = require('express');
const buildImports = require('./build-imports')

const app = express();

const nextApp = next({ dev: true })
const handle = nextApp.getRequestHandler()

buildImports('.data/stories.js', (path) => `../${path}`)

nextApp.prepare().then(() => {
  app.use(express.static('public'));

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
})
