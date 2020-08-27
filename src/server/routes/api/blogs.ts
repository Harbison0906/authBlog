import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:id?' async (req, res) => {
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
    res.sendStatus(500).json('Oops, something went wrong...This is awkward...')
  }
})

router.post('/', async (req, res) => {
  const blog = req.body;
  try {
    const result = await db.blogs.insert(blog.title, blog.content);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json('Oops, something went wrong...This is awkward...')
  }
})