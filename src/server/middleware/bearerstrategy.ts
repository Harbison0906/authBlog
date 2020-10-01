import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';

import { validToken } from '../utils/tokens';
import db from '../db';

passport.use(new BearerStrategy.Strategy( async (token, done) => {
  try {
    let payload = await validToken(token);
    let [author] = await db.authors.find('id', payload.userid);
    if (author) {
      delete author.password;
      done(null, author); //creates req.user
    } else {
      done(null, false)
    }
  } catch (e) {
    done(e);
  }
}))