import express from 'express';
import userRouter from './modules/users/users.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

// Global Middlewares
app.use(express.json());

// Feature API Routes
app.use('/api/users', userRouter);

// Global Catch-all Error Handler (Must be placed after routes)
app.use(errorHandler);

export default app;
