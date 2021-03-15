import { Middleware } from "../../presentation/protocols";

import { Request, Response, NextFunction } from 'express';

export const adaptMiddleware = (middleware: Middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const request = {
            accessToken: req.headers?.["authorization"],
            ...(req.headers || {})
        };
        const httpResponse = await middleware.handle(request);
        const { status, statusCode, message, data } = httpResponse;
        if(200 === status) {
            // Object.assign(req, data);
            req.body.decoded = data;
            next();
        } else {
            res.status(status).json({ statusCode, error: message });
        }
    }
}
