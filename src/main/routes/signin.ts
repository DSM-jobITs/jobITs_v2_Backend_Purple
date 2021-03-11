import { Router } from 'express';

export default (router: Router): void => {
    router.post('/signin/basic');
    router.post('/signin/admin');
}
