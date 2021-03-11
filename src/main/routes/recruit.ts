import { Router } from 'express';

export default (router: Router): void => {
    router.get('/recruit/basic');
    router.get('/recruit/search');
}
