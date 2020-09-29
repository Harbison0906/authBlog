import * as express from 'express';
import blogsRouter from './blogs';
import * as passport from 'passport';
import tagsRouter from './tags';
import blogTagsRouter from './blogtags';

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate('bearer', { session: false }, (err, user, info) => {
    console.log(user);
    if (user) req.user = user;
    return next();
  })(req, res, next);
});

router.use('/blogs', blogsRouter)
router.use('/tags', tagsRouter);
router.use('/blogtags', blogTagsRouter);

export default router;