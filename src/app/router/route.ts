import { Router, Request, Response } from "express";
const userRouter = Router();


userRouter.get('/user/:userId', (req: Request, res: Response) => {

    const params = req.params
    console.log(params)
    res.send('Hello, TypeScript Express!');
});

export default userRouter