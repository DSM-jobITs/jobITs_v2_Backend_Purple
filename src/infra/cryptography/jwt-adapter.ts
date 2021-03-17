import { Encrypter, Verifier } from "../../data/protocols/cryptography";
import jwt from 'jsonwebtoken';
import { InvalidTokenError } from "../../presentation/errors";

const jwt_secret = "어쩌구저쩌구복잡한키";  // env값으로 설정하기

export class JwtAdapter implements Encrypter, Verifier{
    constructor() {}
    async encrypt(jwtAdapterParams: JwtAdapter.Params): Promise<string> {
        const { issuer, expiresIn, user_id, isAdmin } = jwtAdapterParams;
        return jwt.sign({ user_id, isAdmin }, jwt_secret, { issuer, expiresIn });
    }
    
    async verify(ciphertext: string): Promise<JwtAdapter.Result> {
        try {
            const decoded = jwt.verify(ciphertext, jwt_secret) as any;
            return { decoded }; // 토큰 반환 타입 확인하기
        }
        catch(error) {
            console.log(error); //에러 로깅
            return { error: new InvalidTokenError() };  // 에러 추가
        }
    }
}

export namespace JwtAdapter {
    export type Params = {
        issuer: string,
        expiresIn: string,
        user_id: string,
        isAdmin: boolean
    }
    export type Result = {
        decoded?: JwtAdapter.Params,
        error?: Error
    }
}
