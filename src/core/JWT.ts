import { tokenInfo } from '../config';
import { sign, verify } from "jsonwebtoken";
import { promisify } from 'util';

export default class JWT {
    public static async encode(payload: JwtPayload): Promise<string> {
        const secret = tokenInfo.key;
        if(!secret) {}  // 토큰생성(내부) 오류
        return promisify(sign)({...payload}, secret);
    }
    
    public static async decode(token: string): Promise<JwtPayload> {
        const secret = tokenInfo.key;
        try {
            return (await promisify(verify)(
                token,
                secret
                )) as JwtPayload;
        }
        catch(err) {
            console.log(err.message);
        }
    }

    public static async validate(token: string): Promise<JwtPayload> {
        const secret = tokenInfo.key;
        try {
            return (await promisify(verify)(token, secret)) as JwtPayload;
        }
        catch(err) {
            console.log(err.message);
        }

    }

}

export class JwtPayload {
    iss: string;
    exp: number;
    iat: number;
    userId : string;
    isAdmin: boolean;

    constructor(
        issuer: string,
        userId: string,
        validity: number,
        isAdmin: boolean
    ) {
        this.iss = issuer;
        this.userId = userId;
        this.isAdmin = isAdmin;
        this.iat = Math.floor(Date.now()/1000);
        this.exp = this.iat + validity * 60 * 60;
    }

}