export class InvalidParamError extends Error {
    constructor(params: string) {
        super(`${params} format is incorrect`);
        this.name = "10001";
    }
}
