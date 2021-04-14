import { DbPasswordAuthentication } from "../../../data/usecases";
import { PasswordAuthentication } from "../../../domain/usecases";
import { BcryptAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";
import env from '../../config/env';

export const makeDbPasswordAuthentication = (): PasswordAuthentication => {
    const salt = env.bcrypt.salt;    // env값으로 설정하기
    const accountRepository = new UserRepository();
    const bcryptAdapter = new BcryptAdapter(salt);
    return new DbPasswordAuthentication(accountRepository, bcryptAdapter);
}