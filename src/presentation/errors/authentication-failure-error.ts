export class AuthenticationFailureError extends Error {
    constructor() {
        super(`Authentication failure`);
        this.name = "10001";
    }
}
