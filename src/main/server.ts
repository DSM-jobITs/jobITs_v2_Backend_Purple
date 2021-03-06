import 'module-alias/register';
import { createConnection } from 'typeorm';
import { connectionOptions }  from '../infra/config/ormconfig';
import env from './config/env';
// import "reflect-metadata";
// import app from './config/app';

const PORT = env.server.port;

createConnection(connectionOptions)
    .then(async () => {
        const app = (await import('./config/app')).default;
        app.listen(PORT, () => console.log(`server open on ${PORT} port !!!`));        
    })
    .catch(error => console.log(error));
