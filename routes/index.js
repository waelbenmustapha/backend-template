import { Router } from 'express';
import contact from './contact.js';
const router = Router();


router.use('/contact', contact);

export default router;