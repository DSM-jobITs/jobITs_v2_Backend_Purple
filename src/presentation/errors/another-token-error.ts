export class AnotherTokenError extends Error {
    constructor() {
        super(`Another token`);
        this.name = "10002";
    }
}
