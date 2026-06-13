import { Request, Response } from 'express';
import { userService } from './users.service.js';

export const userController = {
  // Express 5 safely routes unhandled async exceptions directly to your error middleware
  getProfile: async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const user = await userService.getProfile(req.params.id);
    res.json({ success: true, data: user });
  }
};