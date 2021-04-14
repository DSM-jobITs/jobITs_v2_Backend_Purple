import { config } from 'dotenv';

config();

export default {
    server: {
        port: Number(process.env.SERVER_PORT),
    },
    bcrypt: {
        salt: Number(process.env.BCRYPT_SALT)
    },
    token: {
        jwt_secret: process.env.JWT_SECRET,
    },
    admin: {
        name: process.env.ADMIN_NAME,
        length: Number(process.env.ADMIN_LENGTH),
    },
    accessToken: {
        issuer: process.env.ACCESSTOKEN_ISSUER,
        expiresIn: process.env.ACCESSTOKEN_EXPIRESIN
    },
    refreshToken: {
        issuer: process.env.REFRESHTOKEN_ISSUER,
        expiresIn: process.env.REFRESHTOKEN_EXPIRESIN
    },
    mysql: {
        port: Number(process.env.MYSQL_PORT),
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USERNAME ,
        password: process.env.MYSQL_PASSWORD,
        databaseName: process.env.MYSQL_NAME,
    }

}