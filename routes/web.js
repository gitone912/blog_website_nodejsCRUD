import express from 'express';
const router = express.Router();
import BlogController from "../controller/userController.js"

router.get('/', BlogController.renderHome);
router.get('/create', BlogController.createBlog);
router.post('/save', BlogController.submitBlog);
router.get('/blog/:id', BlogController.renderBlog);
router.post('/update/:id', BlogController.updateBlog);
router.get('/delete/:id', BlogController.deleteBlog);
router.get('/edit/:id', BlogController.editBlog);

export {router as web}
