import { ApplicationError } from "./ApplicationError";

export class InsufficientBalanceError extends ApplicationError {
    constructor(message : string) {
        super(message);
    }
}