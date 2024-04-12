import express, { Request, Response } from 'express';
import userRouter from './app/router/route';


const app = express();

// routers
app.use(userRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});