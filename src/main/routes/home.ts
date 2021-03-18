import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeHomeNoticeController } from "../factories/controllers";
import { auth } from "../middlewares";

export default (router: Router): void => {
    router.get('/home/notice', auth, adaptRoute(makeHomeNoticeController()));
}
