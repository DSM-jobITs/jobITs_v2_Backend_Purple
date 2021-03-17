import { PasswordAuthentication } from "../../domain/usecases";
import { AuthenticationFailureError, UserNotFoundError } from "../../presentation/errors";
import { forbidden, notFound } from "../../presentation/helpers";
import { HashComparer } from "../protocols/cryptography";
import { LoadUserByEmailRepository } from "../protocols/repository";

// const accessToken_config = {
//     issuer: 'JobITs',
//     expiresIn: '10d'
// }
// const refreshToken_config = {
//     issuer: 'JobITs',
//     expiresIn: '100d'
// }

// const admin_config = {  // 추후 env처리
//     name: "JOBITS_ADMIN",
//     numOfName: 12
// }

export class DbPasswordAuthentication implements PasswordAuthentication {
    constructor(
        private readonly loadAccountByEmailRepository: LoadUserByEmailRepository,
        private readonly hashComparer: HashComparer
    ) {}

    async auth(authenticationParams: PasswordAuthentication.Params): Promise<PasswordAuthentication.Result> {
        const user = await this.loadAccountByEmailRepository.loadById(authenticationParams.id);
        console.log(!!user);    // test logging
        if(user) {
            const isValid = await this.hashComparer.compare(authenticationParams.oldPw, user.password);
            // const isValid = true;    // 임시로 비번 오픈
            if(isValid) {
                return null;
            }
            return { error: forbidden(new AuthenticationFailureError()) }
        }
        return { error: notFound(new UserNotFoundError()) };
    }
}
