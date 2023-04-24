import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import 'vite/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = import.meta.env.MODE === 'production';

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    let template: string, render;

    try {
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf8');
      }
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split('<!--ssr-outlet-->');
      if (!isProd) {
        render = (await vite.ssrLoadModule('./src/entry-server.tsx')).renderApp;
      } else {
        // @ts-ignore
        render = (await import('./dist/server/entry-server')).renderApp;
      }
      const stream = render(url, {
        onShellReady() {
          res.write(parts[0]);
          stream.pipe(res);
        },
        onAllReady() {
          res.write(parts[0] + parts[1]);
          res.end();
        },
      });
    } catch (e: unknown) {
      vite.ssrFixStacktrace(<Error>e);
      next(e);
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(5173, () => {
    console.log(`Server is starting on ${5173}`);
  });
});
