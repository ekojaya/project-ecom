const next = require('next');
const express = require('express');
const compression = require('compression');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = express();
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    app.use(compression());

    // Blocked pages.
    app.use([
      '/_error',
      '/_blogSlug',
    ], (req, res) => {
      res.redirect("/");
    });

    // Wildcard pages.
    app.use('/blogs/:blogSlug', (req, res) => {
      const query = {
        ...req.params,
        ...req.query,
      };
      nextApp.render(req, res, '/_blogSlug', query);
    });

    // Start the default Next handler.
    app.use((req, res) => {
      const parsedURL = parse(req.url, true);
      handle(req, res, parsedURL);
    });

    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`Server is now listening on port, ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
    console.log(`[ERROR] Could not start frontend server: ${e.messsage}`);
  });