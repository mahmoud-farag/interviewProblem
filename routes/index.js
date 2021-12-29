import express from 'express';
import { handlTaskController,displayDataController } from '../controllers/index.js';
 
const handleTaskRoutes= express.Router();

handleTaskRoutes.post('/handltask',  handlTaskController)
handleTaskRoutes.get('/data',  displayDataController)
export {handleTaskRoutes}