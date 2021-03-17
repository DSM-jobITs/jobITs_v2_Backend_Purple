import { LoadUserByEmailRepository } from "../../data/protocols/repository"

export interface LoadUserById {
    load: (id: string) => Promise<LoadUserById.Result>
}

export namespace LoadUserById {
    export type Result = LoadUserByEmailRepository.Result;
}
