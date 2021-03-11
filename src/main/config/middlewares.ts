import express,{ Express } from 'express';
import cors from 'cors';

export default (app: Express): void => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
};
