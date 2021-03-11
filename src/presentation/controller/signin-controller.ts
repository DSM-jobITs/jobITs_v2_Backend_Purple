import { Controller, HttpResponse } from "../protocols";

export class SigninController implements Controller {
    constructor() {}
    async handle (request: SigninController.Request): Promise<HttpResponse> {
        try {
            
        }
        catch(err) {

        }
    }
}

export namespace SigninController {
    export type Request = {
        sId: string,
        sPassword: string
    }
}