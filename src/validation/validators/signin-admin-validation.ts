import { JoiAdapter } from "../../infra/validators";
import { SigninAdminController } from "../../presentation/controller";
import { InvalidParamError, ServerError } from "../../presentation/errors";
import { joiValidation } from "../../presentation/protocols";

export class SigninAdminValidation implements joiValidation {
    constructor(
        private readonly validation: JoiAdapter
    ) {}
    async joiValidate(input:SigninAdminController.Request): Promise<Error> {
        try {
            const isValidAdmin_Id = await this.validation.isValidAdminId(input.id);
            const isValidAdmin_Pw = await this.validation.isValidAdminPassword(input.password);
            if(!isValidAdmin_Id) {
                return new InvalidParamError('adminId');
            }
            if(!isValidAdmin_Pw) {
                return new InvalidParamError('adminPw');
            }
            return false as any;
        }
        catch(err) {
            console.log(err);
            return new ServerError();
        }
    }
}