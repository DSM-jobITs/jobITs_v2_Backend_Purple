import { JoiAdapter } from "../../infra/validators";
import { SigninController } from "../../presentation/controller";
import { InvalidParamError, ServerError } from "../../presentation/errors";
import { joiValidation } from "../../presentation/protocols";

export class SigninValidation implements joiValidation {
    constructor(private readonly validation: JoiAdapter) {}
    async joiValidate(input: SigninController.Request ): Promise<Error> {
        try {
            const isValidSId = await this.validation.isValidSId(input.id);
            const isValidSPassword = await this.validation.isValidSPassword(input.password);
            if(!isValidSId) {
                return new InvalidParamError('sId');
            }
            if(!isValidSPassword) {
                return new InvalidParamError('sPassword');
            }
            return false as any;
            
        }
        catch(err) {
            console.log(err);   // error 로깅
            return new ServerError();
        }
        
    }
}
