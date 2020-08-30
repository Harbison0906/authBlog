import { Router } from 'express';
import blogsRouter from './blogs';
import lulzRouter from './lulz';

const router = Router();

router.use('/blogs', blogsRouter)
router.use('/lulz', lulzRouter);

export default router;