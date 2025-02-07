import { ApplicationError } from "./ApplicationError";

export class InvalidValueError extends ApplicationError {
    constructor(message: string) {
        super(message);
    }
}