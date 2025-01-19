import { PerishableProduct } from "./PerishableProduct";
import { Product } from "./Product";

export class Stock {

    private products: Array<Product>;
    
    constructor() {
        this.products = new Array<Product>();
    }

    public insertProduct(product: Product) : void {
        if (this.alreadyExists(product.getId(), product.getDescription())) {
            console.log("\nJa existe produto com o mesmo id ou descricao!");
        }
        this.products.push(product);
    }

    public consultPerId(id: number) : Product | null {
        const searchedProduct : Product[] = this.products.filter( p => p.getId() === id);
        return searchedProduct.length > 0 ? searchedProduct[0] : null;
    }

    public delete(id: number) {
        const index : number = this.getIndex(id);
        if (index == -1) {
            console.log(`Não existe produto de id ${id}`);
            return;
        }

        // process to delete product
        for (let i = index; i < this.products.length - 1; ++i) {
            this.products[i] = this.products[++i];
        }
        this.products.pop();

        console.log("\nProduto deletado com sucesso!");
    }

    public increaseStock(idProduct: number, quantity: number): void {
        const product : Product | null = this.consultPerId(idProduct);
        if (!product){
            console.log(`Operacao interrompida, nao foi encontrado produto de id ${idProduct}`);
            return;
        }

        product.increaseInStock(quantity);
        console.log("Estoque atualizado.");
    }

    public decreaseStock(idProduct: number, quantity: number): void {
        const product : Product | null = this.consultPerId(idProduct);
        if (!product){
            console.log(`Operacao interrompida, nao foi encontrado produto de id ${idProduct}`);
            return;
        }

        product.decreaseStock(quantity);
        console.log("Estoque atualizado.");
    }

    public getExpiredProducts() : Array<Product> {
        const expiredProducts : Array<Product> = this.products.filter(prod => {
            if (prod instanceof PerishableProduct && !prod.isValid())
                return prod
        });

        return expiredProducts;
    }

    private alreadyExists(idProduct: number, description: string): boolean {
        const filteredList = this.products.filter(prod => prod.getId() === idProduct || prod.getDescription() === description);
        return filteredList.length > 0;
    }

    private getIndex(id : number) : number {
        let index = -1;
        for (let i = 0; i < this.products.length; ++i) {
            if (this.products[i].getId() === id) {
                index = i;
                break;
            }
        }
        return index;
    }
}