import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import frontendMiddleware from './middlewares/frontend-middleware';
import pathMiddleware from './middlewares/path-middleware';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(frontendMiddleware(app));
app.use(pathMiddleware());
app.use('/', routes);

module.exports = app;
