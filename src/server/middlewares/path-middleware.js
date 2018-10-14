import path from 'path';

const pathMiddleware = () => (req, res, next) => {
  const frontendPath = path.resolve(`${__dirname}`, '../../../', 'public/index.html');
  res.locals = {frontendPath}
  next()
};

export default pathMiddleware;
