import { HomeNoticeController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbLoadHomeNotices } from "../usecases";

export const makeHomeNoticeController = (): Controller => {
    return new HomeNoticeController(makeDbLoadHomeNotices());
}
