import { User } from "../database/entity";
import { tokenInfo } from '../config';
import JWT,{ JwtPayload } from "../core/JWT";

declare interface Tokens {
    accessToken: string;
    refreshToken: string;
}


export const createTokens = async (
    user: User
): Promise<Tokens> => {
    let isAdmin = false;
    if(user.id === "admin") {
        isAdmin = true;
    }

    const accessToken = await JWT.encode(
        new JwtPayload(
            tokenInfo.issuer,
            user.id,
            tokenInfo.accessTokenValidity,
            isAdmin   // 이부분 수정(어드민 구분하기)
        )
    );

    if(!accessToken) {} // 내부 오류
    
    const refreshToken = await JWT.encode(
        new JwtPayload(
            tokenInfo.issuer,
            user.id,
            tokenInfo.refreshTokenValidity,
            isAdmin    //이 부분 수정(어드민 구분하기)
        )
    );

    if(!refreshToken) {} // 내부 오류
    
    return {
        accessToken,
        refreshToken
    } as Tokens;
};

export const getAccessToken = async(
    authorization: string
) => {
    if(!authorization || !authorization.startsWith('Bearer ')) {
        return "false";
    }
    return authorization.split(' ')[1];
}

export const validateTokenData = (payload: JwtPayload): boolean => {
    if(
        !payload ||
        !payload.iss ||
        !payload.exp ||
        !payload.iat ||
        !payload.userId  ||
        // !payload.isAdmin ||
        payload.iss !== tokenInfo.issuer
    ) {
        return false;    
    }
    return true;
}