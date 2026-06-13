import { Router } from 'express';
import { userController } from './users.controller.js';

const router = Router();
router.get('/:id', userController.getProfile);

export default router;
