import { LoadUserById } from "../../domain/usecases";
import { ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class InfoController implements Controller {
    constructor(private readonly loadUserById: LoadUserById) {}
    async handle(request:InfoController.Request): Promise<HttpResponse> {
        const user = await this.loadUserById.load(request.decoded.user_id);
        const { name, error } = user;
        if(error) {
            return error;
        }
        return ok({ name });
    }
}

export namespace InfoController {
    export type Request = {
        decoded: {
            issuer: string,
            expiresIn: string,
            user_id: string,
            isAdmin: boolean
        }
    }
}