import { DbPasswordAuthentication, DbUpdateAccount } from "../../../data/usecases";
import { PasswordAuthentication, UpdateAccount } from "../../../domain/usecases";
import { BcryptAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbUpdateAccount = (): UpdateAccount => {
    const salt = 3;    // env값으로 설정하기
    const accountRepository = new UserRepository();
    const bcryptAdapter = new BcryptAdapter(salt);
    return new DbUpdateAccount(accountRepository, bcryptAdapter);
}