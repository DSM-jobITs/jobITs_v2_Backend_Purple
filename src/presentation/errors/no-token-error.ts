export class NoTokenError extends Error {
    constructor() {
        super(`Token not included`);
        this.name = "30000";
    }
}
