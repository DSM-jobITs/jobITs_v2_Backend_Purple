export class NoListError extends Error {
    constructor() {
        super(`No list`);
        this.name = "10001";
    }
}
