import { SigninPasswordController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbPasswordAuthentication, makeDbUpdateAccount } from "../usecases";
import { makeSigninPasswordValidation } from "../validations";

export const makeSigninPasswordController = (): Controller => {
    return new SigninPasswordController(makeSigninPasswordValidation(), makeDbPasswordAuthentication(), makeDbUpdateAccount());
}
