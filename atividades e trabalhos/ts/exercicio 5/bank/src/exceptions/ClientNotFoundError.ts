import { ApplicationError } from "./ApplicationError";

export class ClientNotFoundError extends ApplicationError {
    constructor(message : string) {
        super(message);
    }
}