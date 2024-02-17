import express from 'express';
const router=express.Router();
import { testHandler } from '../controllers/test.controller.js';

router.get('/test', testHandler)

export default router;