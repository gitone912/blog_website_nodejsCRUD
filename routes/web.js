import express from 'express';
const router = express.Router();
import BlogController from "../controller/userController.js"
import AccountController from '../controller/accountController.js';

router.get('/', BlogController.renderHome);
router.get('/create', BlogController.createBlog);
router.post('/save', BlogController.submitBlog);
router.get('/blog/:id', BlogController.renderBlog);
router.post('/update/:id', BlogController.updateBlog);
router.get('/delete/:id', BlogController.deleteBlog);
router.get('/edit/:id', BlogController.editBlog);
router.post('/signin', AccountController.signin);
router.post("/signup", AccountController.signup);
router.get("/login", AccountController.signup_signin_page);


export {router as web}
