import { ApplicationError } from "./ApplicationError";

export class AlreadyExists extends ApplicationError {
    constructor(message : string) {
        super(message);
    }
}