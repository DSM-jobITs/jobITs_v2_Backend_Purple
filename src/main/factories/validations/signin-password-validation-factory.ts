import { JoiAdapter } from "../../../infra/validators";
import { joiValidation } from "../../../presentation/protocols";
import { SigninPasswordValidation } from "../../../validation/validators";

export const makeSigninPasswordValidation = (): joiValidation => {
    const joiAdapter = new JoiAdapter();
    return new SigninPasswordValidation(joiAdapter);
}