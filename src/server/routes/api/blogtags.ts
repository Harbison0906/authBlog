import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import db from '../../db';

const router = express.Router();

router.post('/', async (req, res) => {
  const { blogid, tagid } = req.body;
  try {
    await db.blogtags.insert(blogid, tagid);
    res.json({ msg: 'Blogtag created!'})
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...');
  }
})

router.get('/:blogid', async (req, res) => {
  const blogid = Number(req.params.blogid);
  try {
    const [blogtags] = await db.blogtags.allTagsForBlog(blogid);
    res.json(blogtags);
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...');
  }})


export default router;