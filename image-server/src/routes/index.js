
import { Router } from 'express';
import uploadRouter from '../components/uploadRouter';

const router = Router();

router.use('/uploads', uploadRouter);


export default router;