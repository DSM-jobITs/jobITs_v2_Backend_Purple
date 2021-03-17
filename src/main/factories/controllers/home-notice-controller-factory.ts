import { HomeNoticeController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";

export const makeHomeNoticeController = (): Controller => {
    return new HomeNoticeController();
}
