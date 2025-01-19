export class Product {
    private id: number;
    private description: string;
    private quantity: number;
    private value: number;

    constructor(id: number, description: string, quantity: number, value: number) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.value = value;
    }

    // getters and setters
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string): void {
        this.description = description;
    }

    public getQuantity(): number {
        return this.quantity;
    }
    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getValue(): number {
        return this.value;
    }
    public setValue(value: number): void {
        this.value = value;
    }

    // methods

    public increaseInStock(quantity: number) : void {
        this.quantity += quantity;  
    }

    public decreaseStock(quantity: number) : void {
        this.quantity -= quantity;
    }
}
