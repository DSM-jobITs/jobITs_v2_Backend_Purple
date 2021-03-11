import { Request, Response } from 'express';

import { Controller } from '../../presentation/protocols';

export const adaptRoute = (controller: Controller ) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {})
        };
        const httpResponse = await controller.handle(request);
        if(200 <= httpResponse.status && httpResponse.status <= 299) {
            res.status(httpResponse.status).json({
                statusCode: httpResponse.statusCode,
                message: httpResponse.message,
                data: httpResponse.data
            });
        } else {
            res.status(httpResponse.status).json({
                error: httpResponse.message
            });
        }
    }
};
