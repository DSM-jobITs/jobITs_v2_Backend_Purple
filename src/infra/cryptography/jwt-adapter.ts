import { Encrypter } from "../../data/protocols/cryptography";
import jwt from 'jsonwebtoken';

const jwt_secret = "어쩌구저쩌구복잡한키";  // env값으로 설정하기

export class JwtAdapter implements Encrypter{
    constructor() {}
    async encrypt(jwtAdapterParams: JwtAdapter.Params): Promise<string> {
        const { issuer, expiresIn, user_id, isAdmin } = jwtAdapterParams;
        return jwt.sign({ user_id, isAdmin }, jwt_secret, { issuer, expiresIn });
    }
}

export namespace JwtAdapter {
    export type Params = {
        issuer: string,
        expiresIn: string,
        user_id: string,
        isAdmin: boolean
    }
}
