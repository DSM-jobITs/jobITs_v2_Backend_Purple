import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeRecruitBasicController } from '../factories/controllers';
import { auth } from '../middlewares';

export default (router: Router): void => {
    router.get('/recruit/basic', auth, adaptRoute(makeRecruitBasicController()));
    router.get('/recruit/search');
}
