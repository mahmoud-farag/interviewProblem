import express from 'express';
import { handlTaskController } from '../controllers/index.js';
 
const handleTaskRoutes= express.Router();

handleTaskRoutes.post('/handltask',  handlTaskController)
export {handleTaskRoutes}