export class InvalidRefreshTokenError extends Error {
    constructor() {
        super(`Token expired`);
        this.name = "10001";
    }
}
