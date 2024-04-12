import { Router } from "express";
import { run } from "../../controller/gemini";
const geminiRouter = Router();

geminiRouter.post('/user', run);

export default geminiRouter