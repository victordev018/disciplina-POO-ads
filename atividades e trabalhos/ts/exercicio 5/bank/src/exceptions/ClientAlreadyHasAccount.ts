import { ApplicationError } from "./ApplicationError"

export class ClientAlreadyHasAccount extends ApplicationError {
    constructor(message : string) {
        super(message);
    }
}