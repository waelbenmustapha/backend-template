import { Router } from 'express';
import { contact } from '../controllers/contact/index.js';

const router = Router();

router.post('/', contact);




export default router