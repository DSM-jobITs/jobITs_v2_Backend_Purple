import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeInfoController } from '../factories/controllers';
import { auth } from '../middlewares';

export default (router: Router): void => {
    // router.get('/info/name', adaptRoute(makeInfoController()));
    router.get('/info/name', auth, adaptRoute(makeInfoController()));
}
