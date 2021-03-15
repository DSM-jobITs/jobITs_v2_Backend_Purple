export class InvalidTokenError extends Error {
    constructor() {
        super(`Token expired`);
        this.name = "30000";
    }
}
