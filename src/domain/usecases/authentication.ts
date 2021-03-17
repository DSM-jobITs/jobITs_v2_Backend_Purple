import { HttpResponse } from "../../presentation/protocols"

export interface Authentication {
    auth: (authenticationParams: Authentication.Params) => Promise<Authentication.Result>;
}

export namespace Authentication {
    export type Params = {
        id: string,
        password: string
    }

    export type Result = {
        accessToken?: string,
        refreshToken?: string,
        error?: HttpResponse
    }
}
