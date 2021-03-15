import { TokenAuthentication } from "../../domain/usecases";
import { ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class TokenController implements Controller {
    constructor(
        private readonly authentication: TokenAuthentication
    ) {}
    async handle(request: TokenController.Request): Promise<HttpResponse> {
        // 리프레시 토큰과 액세스 토큰의 페이로드가 같은가 ex) user_id, isAdmin
        const { decoded, refreshToken } = request;
        console.log(request);
        const token = await this.authentication.auth({ id: decoded.user_id, refreshToken });
        if(token.error) {
            return token.error;
        }
        // 새로운 토큰 발급
        return ok(token);
    }
}

export namespace TokenController {
    export type Request = {
        refreshToken: string,
        decoded: {
            issuer: string,
            expiresIn: string,
            user_id: string,
            isAdmin: boolean
        }
    }
}