import * as express from "express";
import JWT from '../../core/JWT';
import { getAccessToken, validateTokenData } from "../../auth/authUtils";
import { UserRepository } from "../../database/repository/UserRepo";

const router = express.Router();

router.get(
    '/name',
    // JWT 검증 미들웨어 필요
    async (req,res) => {
        console.log('in GET info/name');
        
        const accessToken = await getAccessToken(req.headers.authorization);
        if(accessToken === "false") {
            res.status(401).json({
                message: "accessToken does not exist"
            })
        }
        const accessTokenPayload = await JWT.decode(accessToken);
        console.log(accessTokenPayload);
        const isProofAccess = validateTokenData(accessTokenPayload);
        if(!isProofAccess) {
            res.status(401).json({
                message: "Invalid accesstoken"
            })
        }

        const user = await UserRepository.findById(accessTokenPayload.userId);
        if(!user) {
            res.status(404).json({  // fix 401 -> 404
                message: "User not found"
            })
        }

        res.status(200).json({
            userName: user.name
        })

    }
);

export default router;
