import { DbAuthentication } from "../../../data/usecases";
import { Authentication } from "../../../domain/usecases";
import { BcryptAdapter, JwtAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";
import env from '../../config/env';

export const makeDbAuthentication = (): Authentication => {
    const salt = env.bcrypt.salt;    // env값으로 설정하기
    const accountRepository = new UserRepository();
    const bcryptAdapter = new BcryptAdapter(salt);
    const jwtAdapter = new JwtAdapter();
    return new DbAuthentication(accountRepository, bcryptAdapter, jwtAdapter);
}