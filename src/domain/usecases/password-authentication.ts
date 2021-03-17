import { HttpResponse } from "../../presentation/protocols"

export interface PasswordAuthentication {
    auth: (authenticationParams: PasswordAuthentication.Params) => Promise<PasswordAuthentication.Result>;
}

export namespace PasswordAuthentication {
    export type Params = {
        id: string,
        oldPw: string,
        newPw: string
    }

    export type Result = {
        error?: HttpResponse
    }
}
