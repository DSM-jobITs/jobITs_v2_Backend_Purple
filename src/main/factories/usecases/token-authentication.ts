import { DbTokenAuthentication } from "../../../data/usecases";
import { TokenAuthentication } from "../../../domain/usecases";
import { JwtAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbTokenAuthentication = (): TokenAuthentication => {
    // const salt = 19;    // env값으로 설정하기
    const accountRepository = new UserRepository();
    // const bcryptAdapter = new BcryptAdapter(salt);
    const jwtAdapter = new JwtAdapter();
    return new DbTokenAuthentication(jwtAdapter, jwtAdapter, accountRepository);
}