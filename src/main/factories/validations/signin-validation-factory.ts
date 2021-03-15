import { JoiAdapter } from '../../../infra/validators';
import { joiValidation } from '../../../presentation/protocols';
import { SigninValidation } from '../../../validation/validators/signin-validation';

export const makeSigninValidation = (): joiValidation => {
    // const validations: Validation[] = [];
    const joiAdapter = new JoiAdapter();
    return new SigninValidation(joiAdapter);
};
