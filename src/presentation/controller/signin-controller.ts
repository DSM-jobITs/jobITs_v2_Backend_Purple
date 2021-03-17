import { Authentication } from "../../domain/usecases";
import { ServerError } from "../errors/server-error";
import { badRequest, ok, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninController implements Controller {
    constructor(
        private readonly authentication: Authentication,
        private readonly validation: joiValidation
    ) {}
    async handle (request: SigninController.Request): Promise<HttpResponse> {
        try {
            const error = await this.validation.joiValidate(request);
            if(error.message === `Internal server error`) {
                return serverError(error);  //서버 메시지로 구분함
            }
            if(!!error) {
                return badRequest(error);
            }
            const authenticationModel = await this.authentication.auth(request);
            console.log(authenticationModel); // test
            if(authenticationModel.error) {
                return authenticationModel.error;
            }
            return ok({ ...authenticationModel });
        }
        catch(err) {
            return serverError(new ServerError());
        }
    }
}

export namespace SigninController {
    export type Request = {
        id: string,
        password: string
    }
}