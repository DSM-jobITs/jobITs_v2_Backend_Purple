export class LoadUserByEmailRepository {
    loadById: (email: string) => Promise<LoadUserByEmailRepository.Result>
}

export namespace LoadUserByEmailRepository {
    export type Result = {
        id: string,
        password: string,
        name: string
    };
}
