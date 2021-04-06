import { Request, Response, Router } from 'express';

import bcrypt from 'bcrypt';

export default (router: Router): void => {
    router.get('/encryption', async (req:Request, res: Response) => {
        // console.log(req.body.plaintext);
        // const bcrypt = new BcryptAdapter(3);
        const text = await bcrypt.hash(req.body.plaintext, 3);
        // console.log(text);
        res.status(200).json({
            text: text
        })
    });
}
