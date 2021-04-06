import { Request, Response, Router } from 'express';

import bcrypt from 'bcrypt';
import { EntityRepository } from "typeorm";

export default (router: Router): void => {
    router.get('/encryption', async (req:Request, res: Response) => {
        console.log(req.body.plaintext);
        // const bcrypt = new BcryptAdapter(3);
        const text = await bcrypt.hash("dddddd", 3);
        console.log(text);
        res.status(200).json({
            text: text
        })
    });
}
