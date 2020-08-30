import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import { comparePassword } from '../utils/passwords';
import db from '../db';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({ 
  usernameField: 'email', 
  session: false}, 
  async (email, password, done) => {
    try {
      let [user]: any = await db.authors.findOneByEmail(email);
      if(user && comparePassword(password, user.password)) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
}));
