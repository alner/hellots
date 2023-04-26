import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import type { About } from '../common/types';

dotenv.config();
const port = process.env.PORT ?? 3000;
const app: Express = express();

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`Req: ${req.hostname} ${req.ip} ${req.method} ${req.url}`);
    next();
}
app.use(loggerMiddleware);
app.get('/api/v1/about', (req: Request, res: Response) => {
    const data: About = { 
        version: '1.0', 
        name: 'Express/Typescript API server' 
    };
    res.json(data);
});

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));