import { JoiAdapter } from "../../../infra/validators";
import { joiValidation } from "../../../presentation/protocols";
import { SigninAdminValidation } from "../../../validation/validators";

export const makeSigninAdminValidation = (): joiValidation => {
    const joiAdapter = new JoiAdapter();
    return new SigninAdminValidation(joiAdapter);
}