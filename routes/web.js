import express from 'express';
const router = express.Router();
import StudentController from "../controller/userController.js"

router.get('/', StudentController.renderHome);

export {router as web}
