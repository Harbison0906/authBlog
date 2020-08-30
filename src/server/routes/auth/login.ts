import * as express from 'express';
import * as passport from 'passport';
import { createToken } from '../../utils/tokens';


const router = express.Router();

router.post('/', passport.authenticate('local'), async (req, res) => {
  try {
    let token = await createToken({ userid: req.user. })
  } catch (error) {
    console.log(error);
    res.status(500).json('Internal Server Error');
  }
})

export default router;