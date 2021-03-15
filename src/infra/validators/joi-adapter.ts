import { schema } from '../config';

// 함수 4개 하나로 합치기
// 함수 4개 하나로 합치기
// 함수 4개 하나로 합치기

export class JoiAdapter {
    constructor() {}
    async isValidSId(sId: string): Promise<boolean> {
        try {
            await schema.validateAsync({ sId });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

    async isValidSPassword(sPassword: string): Promise<boolean> {
        try {
            await schema.validateAsync({ sPassword });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

    async isValidAdminId(adminId: string): Promise<boolean> {
        try {
            await schema.validateAsync({ adminId });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

    async isValidAdminPassword(adminPassword: string): Promise<boolean> {
        try {
            await schema.validateAsync({ adminPassword });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

}
