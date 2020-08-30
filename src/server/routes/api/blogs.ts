import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import db from '../../db';

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

router.post('/', async (req, res) => {
  const blog = req.body;
  const token = req.headers['authorization'].split(' ')[1];
  const verified = jwt.verify(token, config.auth.secret);
  console.log(verified);

  try {
    if (!token) {
      res.sendStatus(401);
    } else {
      const result = await db.blogs.insert(blog.title, blog.content);
      res.json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
})

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const blog = req.body;
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const verified = jwt.verify(token, config.auth.secret);
    console.log(verified);
    if (!token) {
      res.sendStatus(401);
    } else {
      const updatePost = await db.blogs.update(id, blog.title, blog.content);
      res.json('Post updated!');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
})

router.delete('/:blogid', async (req, res) => {
  const blogid = Number(req.params.blogid);
  const token = req.headers['authorization'].split(' ')[1];
  const verified = jwt.verify(token, config.auth.secret);
  console.log(verified);
  if (!token) {
    res.sendStatus(401);
  } else {
    await db.blogtags.destroy(blogid); //delete this blog's reference first
    await db.blogs.destroy(blogid); //delete safely now from blogs table
    res.json({ msg: 'RIP, post...' });
  }
});



export default router;