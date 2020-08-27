import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config';

const router = Router();

// GET /api/lulz
router.get('/', (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  const verified = jwt.verify(token, config.auth.secret);
  console.log(verified);
  if (!token) {
    res.sendStatus(401);
  } else {
    res.json({ msg: 'LULZ'});
  }
});

export default router;