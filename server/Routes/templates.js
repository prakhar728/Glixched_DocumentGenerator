import express, { Router } from 'express';
import {getDocument, createTemplate} from '../Controllers/posts.js';
const router = express.Router();

router.get('/',getDocument);
router.post('/',createTemplate);

export default router;