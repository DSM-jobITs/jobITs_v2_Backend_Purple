import { Express, Router } from 'express';

import signinRoutes from '../routes/signin';
import infoRoutes from '../routes/info';
import tokenRoutes from '../routes/token';
import recruitRoutes from '../routes/recruit';
import encryptionRoutes from '../routes/encryption';
import homeRoutes from '../routes/home';

const router = Router();

export default (app: Express): void => {
    app.use('/', router);

    encryptionRoutes(router);
    
    homeRoutes(router);
    signinRoutes(router);
    infoRoutes(router);
    tokenRoutes(router);
    recruitRoutes(router);
    encryptionRoutes(router);

}
