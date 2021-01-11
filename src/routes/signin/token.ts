import * as express from "express";
import JWT from '../../core/JWT';
import { UserRepository } from "../../database/repository/UserRepo";
import { getAccessToken, validateTokenData } from "../../auth/authUtils";
import { createTokens } from "../../auth/authUtils";


const router = express.Router();

router.post(
    '/refresh',
    async (req,res) => {
        console.log('in POST token/refresh ');
        try {
            console.log(req.headers.authorization);
            
            const accessToken = await getAccessToken(req.headers.authorization);
            
            if(accessToken === "false") {
                res.status(401).json({
                    message: "accessToken does not exist"
                });
            }

            const accessTokenPayload = await JWT.decode(accessToken);
            console.log(accessTokenPayload);
            const isProofAccess = validateTokenData(accessTokenPayload);
            if(!isProofAccess) {
                res.status(403).json({  //fix 401 -> 403
                    message: "Invalid accesstoken"
                })
            }

            const userInAccess = await UserRepository.findById(accessTokenPayload.userId);
            if(!userInAccess) {
                res.status(404).json({  // fix 401 -> 404
                    message: "User not found"
                })
            }

            if(!req.body.refreshToken) {
                res.status(401).json({
                    message: "refreshToken does not exist"
                });
            }
            const refreshTokenPayload = await JWT.validate(req.body.refreshToken); 
            const isProofRefresh = validateTokenData(refreshTokenPayload);
            if(!isProofRefresh) {
                res.status(403).json({  // fix 401 -> 403   // 401 ? 유저를 모르기 때문에
                    message: "Invalid refreshtoken"
                })
            }

            const userInRefresh = await UserRepository.findById(refreshTokenPayload.userId);
            if(!userInRefresh) {
                res.status(404).json({  // fix 401 -> 404 
                    message: "User not found"
                })
            }

            if(userInAccess.id !== userInRefresh.id) {  // 403 ? 유저를 알기 때문에
                res.status(401).json({
                    message: "Invalid refresh token"
                });
            }

            const token = await createTokens(userInAccess);

            res.status(200).json({
                message: "Success refresh !",
                token   // 토큰 둘다 넘겨줄지 정하기
            })
        }
        catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    });

export default router;
