import { PasswordAuthentication, UpdateAccount } from "../../domain/usecases";
import { badRequest, ok, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninPasswordController implements Controller {
    constructor(
        private readonly validation: joiValidation,
        private readonly authentication: PasswordAuthentication,
        private readonly updateAccount: UpdateAccount
    ) {}
    async handle(info:SigninPasswordController.Request): Promise<HttpResponse> {
        const { decoded, oldPw, newPw } = info;
        const validate = await this.validation.joiValidate({ oldPw, newPw });
        if(validate.message === `Internal server error`) {
            return serverError(validate);
        }
        if(!!validate) {
            return badRequest(validate);
        }
        const isValid = await this.authentication.auth({ id: decoded.user_id, oldPw, newPw });
        if(isValid) {
            return isValid.error;
        }
        const save = await this.updateAccount.update({ id: decoded.user_id, password : newPw });
        if(save) {
            return save.error;
        }
        return ok({});
    }
}

export namespace SigninPasswordController {
    export type Request = {
        oldPw: string,
        newPw: string,
        decoded: {
            issuer: string,
            expiresIn: string,
            user_id: string,
            isAdmin: boolean
        }
    }
}