import Joi from 'joi';
import env from '../../main/config/env';

const admin_config = {  // 추후 env처리
    name: env.admin.name,
    numOfName: env.admin.length
}

export const schema = Joi.object().keys({
    sId:Joi.string().min(7).email({ minDomainSegments:3, tlds: { allow: ['kr'] } }),
    sPassword: Joi.string().min(6).max(20),
    adminId:Joi.string().min(admin_config.numOfName).max(admin_config.numOfName),
    adminPassword: Joi.string().min(6).max(20)
});
