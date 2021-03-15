import { Authentication, TokenAuthentication } from "../../domain/usecases";
import { AnotherTokenError, AuthenticationFailureError, InvalidRefreshTokenError, UserNotFoundError } from "../../presentation/errors";
import { forbidden, notFound } from "../../presentation/helpers";
import { Encrypter, HashComparer, Verifier } from "../protocols/cryptography";
import { CheckAccountByIdRepository, LoadUserByEmailRepository } from "../protocols/repository";

const accessToken_config = {
    issuer: 'JobITs',
    expiresIn: '10d'
}
const refreshToken_config = {
    issuer: 'JobITs',
    expiresIn: '100d'
}

const admin_config = {  // 추후 env처리
    name: "JOBITS_ADMIN",
    numOfName: 12
}

export class DbTokenAuthentication implements TokenAuthentication {
    constructor(
        // private readonly loadAccountByEmailRepository: LoadUserByEmailRepository,
        // private readonly hashComparer: HashComparer,
        private readonly jwtEncrypter: Encrypter,
        private readonly jwtVerifier: Verifier,
        private readonly repository: CheckAccountByIdRepository
        
    ) {}

    async auth(authenticationParams: TokenAuthentication.Params): Promise<TokenAuthentication.Result> {
        const { id, refreshToken } = authenticationParams;
        // 리프레시 토큰이 유효한가?
        const refresh_id = await this.jwtVerifier.verify(refreshToken);
        if(refresh_id.error) {
            return { error: forbidden(new InvalidRefreshTokenError()) };
        }
        // decoded.id 와 리프레시 토큰의 아이디가 같은가
        if(refresh_id.decoded.user_id !== id) {
            return { error: forbidden(new AnotherTokenError()) };
        }
        // decoded.id 가 db에 존재하는가
        const isExist = this.repository.checkById(id);
        // isExist 에서 값을 찾을 수 없을 때 null이 나오는지 확인하기
        if(!isExist) {
            return { error: notFound(new UserNotFoundError()) }
        }
        // /decoded.id 와 JOBITS_ADMIN이 같은가 -> isAdmin 설정
        let isAdmin: boolean = (id === admin_config.name);
        const access_Token = await this.jwtEncrypter.encrypt({
            ...accessToken_config,
            user_id: id,
            isAdmin
        });
        const refresh_Token = await this.jwtEncrypter.encrypt({
            ...refreshToken_config,
            user_id: id,
            isAdmin
        });
        return { accessToken: access_Token, refreshToken: refresh_Token }
    }
}
