import express from 'express';
import path from 'path';

const router = express.Router();

router.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../', 'public', 'index.html'));
});

export default router;
