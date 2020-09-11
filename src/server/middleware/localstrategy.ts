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
      console.log('starting strategy with login attempt by: ' + email);

      let [user]: any = await db.authors.findOneByEmail(email);
      console.log('author email found! author record:', user);

      if(user && comparePassword(password, user.password)) {
        console.log('how did it get here and still not work??');

        done(null, user);
      } else {
        console.log('email not found or passwords no match');

        done(null, false);
      }
    } catch (e) {
      done(e);
    }
}));
