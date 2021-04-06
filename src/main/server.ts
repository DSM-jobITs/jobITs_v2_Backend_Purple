import 'module-alias/register';
import { createConnection } from 'typeorm';
import { connectionOptions }  from '../infra/config/ormconfig';
// import "reflect-metadata";
// import app from './config/app';
// import bcrypt from "bcrypt";

const PORT = 3002;

createConnection(connectionOptions)
    .then(async () => {
        const app = (await import('./config/app')).default;
        // const text = await bcrypt.hash("dsm002", 3);
        // console.log(text);
        app.listen(PORT, () => console.log(`server open on ${PORT} port !!!`));        
    })
    .catch(error => console.log(error));
