import { Express, Router } from 'express';

import signinRoutes from '../routes/signin';
import infoRoutes from '../routes/info';
import tokenRoutes from '../routes/token';
import recruitRoutes from '../routes/recruit';
import encryptionRoutes from '../routes/encryption';

const router = Router();

export default (app: Express): void => {
    app.use('/', router);

    encryptionRoutes(router);
    signinRoutes(router);
    infoRoutes(router);
    tokenRoutes(router);
    recruitRoutes(router);
}
