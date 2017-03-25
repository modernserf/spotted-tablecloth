const next = require('next');
const express = require('express');
const proxy = require('express-http-proxy');
const fs = require('fs');
const app = express();

const nextApp = next({ dev: true })
const handle = nextApp.getRequestHandler()

const storybookPages = fs.readdirSync("./pages")
  .map(file => `/pages/${file}`)
const storybookShared = fs.readdirSync("./shared")
  .map(file => `/shared/${file}`)

const storybookFiles = storybookPages
  .concat(storybookShared)
  .filter((file) => file.match(/story/))

nextApp.prepare().then(() => {
  app.use(express.static('public'));

  app.get('/api/stories', (req, res) => {
    res.json(storybookFiles)
  })
  
  app.use('/stories', proxy("localhost:5555", {
    forwardPath: function(req) {
      return require('url').parse(req.url).path;
    }
  }));

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
})


