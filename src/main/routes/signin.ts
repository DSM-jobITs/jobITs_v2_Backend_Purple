import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeSigninAdminController, makeSigninController, makeSigninPasswordController } from '../factories/controllers';
import { auth } from '../middlewares';

export default (router: Router): void => {
    router.post('/signin/basic', adaptRoute(makeSigninController()));
    router.post('/signin/admin', adaptRoute(makeSigninAdminController()));
    router.post('/signin/password', auth, adaptRoute(makeSigninPasswordController()));
}
