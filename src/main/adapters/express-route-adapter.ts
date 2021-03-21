import { Request, Response } from 'express';

import { Controller } from '../../presentation/protocols';

export const adaptRoute = (controller: Controller ) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {})
        };
        // console.log(typeof req.query.numOfWorker);
        
        const httpResponse = await controller.handle(request);
        const { status, statusCode, message, data } = httpResponse;
        if(200 <= status && status <= 299) {
            res.status(status).json({ statusCode, message, data });
        } else {
            res.status(status).json({ statusCode, error: message });
        }
    }
};
