const { GoogleGenerativeAI } = require("@google/generative-ai");
import { Request, Response } from "express";
require('dotenv').config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function run(req: Request, res: Response) {
    console.log(req.body)
    const { prompt } = req.body

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json(text);
}

