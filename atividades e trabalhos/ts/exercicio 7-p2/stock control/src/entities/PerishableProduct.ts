import { Product } from "./Product";

export class PerishableProduct extends Product {

    private expirationDate: Date;

    constructor(id: number, description: string, quantity: number, value: number, expirationDate: Date) {
        super(id, description, quantity, value);
        this.expirationDate = expirationDate;
    }

    // methods

    public isValid() : boolean {
        return this.expirationDate > new Date();
    }

    public increaseInStock(quantity: number): void {
        if (!this.isValid()) {
            console.log("Operacao interrompida, produto nao esta na validade");
            return;
        }

        super.increaseInStock(quantity);
    }

    public decreaseStock(quantity: number): void {
        if (!this.isValid()) {
            console.log("Operacao interrompida, produto nao esta na validade");
            return;
        }

        super.decreaseStock(quantity);
    }
}