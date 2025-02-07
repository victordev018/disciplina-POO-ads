import { ApplicationError } from "./ApplicationError";

export class NonExistentAccountError extends ApplicationError {
    constructor(message : string) {
        super(message);
    }
}