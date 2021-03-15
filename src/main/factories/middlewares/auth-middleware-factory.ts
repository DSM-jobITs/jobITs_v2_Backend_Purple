import { JwtAdapter } from "../../../infra/cryptography";
import { AuthMiddleware } from "../../../presentation/middlewares";
import { Middleware } from "../../../presentation/protocols";

export const makeAuthMiddleware = (): Middleware => {
    const jwtAdapter = new JwtAdapter();
    return new AuthMiddleware(jwtAdapter);
}