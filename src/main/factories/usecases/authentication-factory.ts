import { DbAuthentication } from "../../../data/usecases";
import { Authentication } from "../../../domain/usecases";
import { BcryptAdapter, JwtAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbAuthentication = (): Authentication => {
    const salt = 19;    // env값으로 설정하기
    const bcryptAdapter = new BcryptAdapter(salt);
    const jwtAdapter = new JwtAdapter();
    const accountRepository = new UserRepository();
    return new DbAuthentication(accountRepository, bcryptAdapter);
}