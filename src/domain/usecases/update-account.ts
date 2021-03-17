import { HttpResponse } from "../../presentation/protocols";

export interface UpdateAccount {
    update: (account: UpdateAccount.Params) => Promise<UpdateAccount.Result>;
}

export namespace UpdateAccount {
    export type Params = {
        id: string,
        password: string
    }
    export type Result = {
        error?: HttpResponse
    };
}
