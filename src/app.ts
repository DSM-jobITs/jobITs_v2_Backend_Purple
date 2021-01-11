import express from "express";
import router from "./routes";
import { createConnection } from "typeorm";
import config from "../ormconfig";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',router);

createConnection(config)
    .then(() => {
        console.log('db connection !');
    })
    .catch((err) => console.log(err)
    );

app.listen(3002, () => {
    console.log('server open on 3002 port !');
});
