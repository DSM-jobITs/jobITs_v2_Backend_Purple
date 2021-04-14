import { JoiAdapter } from "../../infra/validators";
import { InvalidParamError, ServerError } from "../../presentation/errors";
import { joiValidation } from "../../presentation/protocols";

export class SigninPasswordValidation implements joiValidation {
    constructor(
        private readonly validation: JoiAdapter
    ) {}
    async joiValidate(input:SigninPasswordValidation.Request): Promise<Error> {
        try {
            const isValid_oldPw = await this.validation.isValidAdminPassword(input.oldPw);
            const isValid_newPw = await this.validation.isValidAdminPassword(input.newPw);
            if(!isValid_oldPw) {
                return new InvalidParamError('old password');
            }
            if(!isValid_newPw) {
                return new InvalidParamError('new password');
            }
            return false as any;
        }
        catch(err) {
            console.log(err);
            return new ServerError();
        }
    }
}

export namespace SigninPasswordValidation {
    export type Request = {
        oldPw: string,
        newPw: string
    }
}