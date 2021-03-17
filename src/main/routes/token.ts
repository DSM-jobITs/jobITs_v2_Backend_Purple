import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeTokenController } from '../factories/controllers';
import { auth } from '../middlewares';

export default (router: Router): void => {
    router.get('/token/refresh', auth, adaptRoute(makeTokenController()));
}
