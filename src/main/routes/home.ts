import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeHomeNoticeController } from "../factories/controllers";

export default (router: Router): void => {
    router.get('/home/notice', adaptRoute(makeHomeNoticeController()));
}
