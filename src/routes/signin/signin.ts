import * as express from "express";
// import asynchandler from "../../middleware/asynchandler";
import { UserRepository } from "../../database/repository/UserRepo";
// import bcrypt from "bcrypt";
import { createTokens } from "../../auth/authUtils";

const router = express.Router();

router.post(
    '/basic',
    async (req,res) => {
        console.log('in POST signin/basic');
        try {
            const user = await UserRepository.findById(req.body.id);
            if(!user){ 
                res.status(404).json({  // fix 401 -> 404
                    message: "User not found"
                })
            }
            
            // const compare = await bcrypt.compare(req.body.password,user.password);
            if(user.password !== req.body.password) {
                res.status(401).json({
                    message: "Authentication failure"
                });
            }
            
            const token = await createTokens(user);

            res.status(200).json({
                message: "Success signin !",
                token
            });
        }
        catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
);

router.post(
    '/admin',
    async (req,res) => {
        console.log('in POST signin/admin');
        try {
            const user = await UserRepository.findById(req.body.id);
            if(!user){ 
                res.status(404).json({  // fix 401 -> 404
                    message: "User not found"
                })
            }
            
            // const compare = await bcrypt.compare(req.body.password,user.password);
            if(user.password !== req.body.password) {
                res.status(401).json({
                    message: "Authentication failure"
                });
            }
            
            const token = await createTokens(user);

            res.status(200).json({
                message: "Success signin !",
                token
            });
        }
        catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
);

export default router;