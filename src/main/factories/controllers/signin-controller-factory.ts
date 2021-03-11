import { SigninController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";

export const makeSigninController = (): Controller => {
    const controller = new SigninController();
    return controller;  // decorater로 변환하기
};
