import { SigninController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbAuthentication } from "../usecases";
import { makeSigninValidation } from "../validations";
// makeDbAuthentication(), 
export const makeSigninController = (): Controller => {
    return new SigninController(makeDbAuthentication(), makeSigninValidation());
    // decorater로 변환하기
};
