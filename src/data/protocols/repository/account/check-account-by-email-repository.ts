export class CheckAccountByIdRepository {
    checkById: (id: string) => Promise<CheckAccountByIdRepository.Result>
}

export namespace CheckAccountByIdRepository {
    export type Result = boolean;
}
