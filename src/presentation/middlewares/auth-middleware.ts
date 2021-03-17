import { Verifier } from "../../data/protocols/cryptography";
import { NoTokenError } from "../errors";
import { badRequest, forbidden, ok } from "../helpers";
import { HttpResponse, Middleware } from "../protocols";

export class AuthMiddleware implements Middleware {
    constructor(
        private readonly verifier: Verifier
    ) {}
    async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
        const { accessToken } = request;
        if(accessToken) {
            const token = accessToken.split(' ')[1];
            const verify = await this.verifier.verify(token);
            const { error, decoded } = verify;
            if(error) {
                return forbidden(error);
            }
            return ok({ ...decoded });
        }
        console.log(accessToken);
        return badRequest(new NoTokenError());
    }
}

export namespace AuthMiddleware {
    export type Request = {
        accessToken?: string
    }
}