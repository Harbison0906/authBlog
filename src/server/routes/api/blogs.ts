import * as express from 'express';
import db from '../../db';
import { isLoggedIn } from '../../middleware/auth-middlewares';
import { ReqUser } from '../../utils/types';

const router = express.Router();



router.get('/:id?', async (req, res) => {
  const id = Number(req.params.id)
  try {
    if (id) {
      const [blog] = await db.blogs.one(id);
      res.json(blog)
    } else {
      const blogs = await db.blogs.all();
      res.json(blogs);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json('Oops, something went wrong...This is awkward...')
  }
})

router.post('/', isLoggedIn, async (req: ReqUser, res) => {
  const blog = req.body;
  const loggedInAuthorId = req.user.id;
  try {
    const result = await db.blogs.insert(blog.title, blog.content, loggedInAuthorId);
    res.json(result);

  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
})

router.put('/:id', isLoggedIn, async (req, res) => {
  const id = Number(req.params.id);
  const blog = req.body;

  try {
    await db.blogs.update(id, blog.title, blog.content);
    res.json('Post updated!');
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
})

router.delete('/:blogid', isLoggedIn, async (req: ReqUser, res) => {
  const blogid = Number(req.params.blogid);
  const loggedInAuthorId = req.user.id;

  try {
    await db.blogtags.destroy(blogid); //delete this blog's reference first
    await db.blogs.destroy(blogid, loggedInAuthorId) //delete safely now from blogs table
    res.json({ msg: 'RIP, post...' });
  } catch (error) {
    throw error;
  }
}
);



export default router;