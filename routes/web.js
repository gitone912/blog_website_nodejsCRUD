import express from 'express';
const router = express.Router();
import BlogController from "../controller/userController.js"

router.get('/', BlogController.renderHome);
router.get('/create', BlogController.createBlog);

export {router as web}
