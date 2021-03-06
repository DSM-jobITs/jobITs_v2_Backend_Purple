import { Authentication } from "../../domain/usecases";
import { AuthenticationFailureError, UserNotFoundError } from "../../presentation/errors";
import { forbidden, notFound } from "../../presentation/helpers";
import { Encrypter, HashComparer } from "../protocols/cryptography";
import { LoadUserByEmailRepository } from "../protocols/repository";
import env from '../../main/config/env';

const accessToken_config = {
    issuer: env.accessToken.issuer,
    expiresIn: env.accessToken.expiresIn
}
const refreshToken_config = {
    issuer: env.refreshToken.issuer,
    expiresIn: env.refreshToken.expiresIn
}

const admin_config = {  // 추후 env처리
    name: env.admin.name,
    numOfName: env.admin.length
}

export class DbAuthentication implements Authentication {
    constructor(
        private readonly loadAccountByEmailRepository: LoadUserByEmailRepository,
        private readonly hashComparer: HashComparer,
        private readonly jwtEncrypter: Encrypter
    ) {}

    async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result> {
        const user = await this.loadAccountByEmailRepository.loadById(authenticationParams.id);
        console.log(!!user);    // test logging
        if(user) {
            const isVlid = await this.hashComparer.compare(authenticationParams.password, user.password);
            // const isVlid = true;    // 임시로 비번 오픈
            if(isVlid) {
                let isAdmin: boolean = false;
                // if(user.id === admin_config.name) {
                if(user.id.startsWith(admin_config.name)) {
                    isAdmin = true;
                }
                const accessToken = await this.jwtEncrypter.encrypt({
                    ...accessToken_config,
                    user_id: user.id,
                    isAdmin
                });
                const refreshToken = await this.jwtEncrypter.encrypt({
                    ...refreshToken_config,
                    user_id: user.id,
                    isAdmin
                });
                return { accessToken, refreshToken };
            }
            return { error: forbidden(new AuthenticationFailureError()) }
        }
        return { error: notFound(new UserNotFoundError()) };
    }
}
