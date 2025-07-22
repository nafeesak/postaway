//1. Import Express
import express from 'express';
import { signInUser,signUpUser } from './user.controller.js';
//2. Initialize Express router
const userRouter=express.Router()
const userController=new UserController()
//All the paths
userRouter.post('/signup',signUpUser);
userRouter.post('/signin',signInUser);

export default userRouter;