import express from 'express';
const router = express.Router();
import BlogController from "../controller/userController.js"

router.get('/', BlogController.renderHome);

export {router as web}
