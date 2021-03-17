import { Authentication } from "../../domain/usecases";
import { ServerError } from "../errors";
import { badRequest, ok, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninAdminController implements Controller {
    constructor(
        private readonly authentication: Authentication,
        private readonly validation: joiValidation
    ) {}
    async handle(request: SigninAdminController.Request): Promise<HttpResponse> {
        try {
            const error = await this.validation.joiValidate(request);
            if(error.message === `Internal server error`) {
                return serverError(error);
            }
            if(!!error) {
                return badRequest(error);
            }
            const authenticationModel = await this.authentication.auth(request);
            console.log(authenticationModel);   // test loggin
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

export namespace SigninAdminController {
    export type Request = {
        id: string,
        password: string
    }
}
