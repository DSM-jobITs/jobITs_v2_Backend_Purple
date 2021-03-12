import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeSigninController } from '../factories/controllers';

export default (router: Router): void => {
    router.post('/signin/basic', adaptRoute(makeSigninController()));
    router.post('/signin/admin');
}
