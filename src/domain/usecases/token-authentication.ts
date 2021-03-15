import { HttpResponse } from "../../presentation/protocols"

export interface TokenAuthentication {
    auth: (authenticationParams: TokenAuthentication.Params) => Promise<TokenAuthentication.Result>;
}

export namespace TokenAuthentication {
    export type Params = {
        id: string,
        // accessToken: string,
        refreshToken: string
    }

    export type Result = {
        accessToken?: string,
        refreshToken?: string,
        error?: HttpResponse
    }
}
