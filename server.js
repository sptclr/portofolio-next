const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express();

  // don't need again, cause next-router was handled it
  // server.get('/portofolio/:id', (req, res) => {
  //   const actualPage = '/portofolio'
  //   const queryParams = { id: req.params.id } 
  //   routes.render(req, res, actualPage, queryParams)
  // })

  // important! set the custom config url in above wildcard handler '*'
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})