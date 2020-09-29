import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import { comparePassword } from '../utils/passwords';
import db from '../db';


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
  usernameField: 'email',
  session: false
},
  async (email, password, done) => {
    try {

      let [author] = await db.authors.find('email', email);
      if (author && comparePassword(password, author.password)) {

        done(null, author);
      } else {
        console.log('email not found or passwords no match');

        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  }));
