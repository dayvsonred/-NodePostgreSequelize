import {Router} from 'express';
const router = Router();
import { createProjects } from "../controllers/projetct.controller";


//api/projects/
router.post('/', createProjects);
router.get('/', createProjects);


export default router;


