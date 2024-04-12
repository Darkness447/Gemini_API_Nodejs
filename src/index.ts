import express from 'express';
import geminiRouter from './app/router/gemini/route';


const app = express();

// routers
app.use(express.json())
app.use(geminiRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});