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
      console.log(comparePassword(password, user.password));
      if(user && comparePassword(password, user.password)) {

        done(null, user);
      } else {
        console.log('email not found or passwords no match');

        done(null, false);
      }
    } catch (e) {
      done(e);
    }
}));
