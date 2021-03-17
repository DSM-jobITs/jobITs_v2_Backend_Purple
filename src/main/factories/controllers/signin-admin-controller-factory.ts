import { SigninAdminController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbAuthentication } from "../usecases";
import { makeSigninAdminValidation } from "../validations";

export const makeSigninAdminController = (): Controller => {
    return new SigninAdminController(makeDbAuthentication() , makeSigninAdminValidation());
}