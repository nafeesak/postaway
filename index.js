import express from 'express';
import userRoute from './src/features/user/user.routes.js';

const app=express();
app.use(express.json());
app.use('/api',userRoute)

export default app;