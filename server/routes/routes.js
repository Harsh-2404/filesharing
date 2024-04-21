import express from 'express';
import { uploadImage,downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js'

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage); //router.post('/endpoint', middleware, callback_function);
router.get('/share/:fileId', downloadImage);

export default router;