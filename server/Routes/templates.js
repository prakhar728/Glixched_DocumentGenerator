import express, { Router } from 'express';
import {createTemplate} from '../Controllers/templates.js';
const router = express.Router();


router.post('/',createTemplate);

export default router;