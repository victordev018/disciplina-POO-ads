import { Product } from "../entities/Product";
import { Stock } from "../entities/Stock";



function main() {

    const stock : Stock = new Stock();

    // add products
    stock.insertProduct(new Product(1, "Smartphone Samsung 16gb 250gb", 10, 1489));
    stock.insertProduct(new Product(2, "Notebook Dell Inspiron 15", 5, 3499));
    stock.insertProduct(new Product(3, "Smart TV LG 50\"", 8, 2199));
    stock.insertProduct(new Product(4, "Fone de Ouvido Bluetooth JBL", 15, 299));
    stock.insertProduct(new Product(5, "Teclado Mecânico Redragon", 12, 429));

    let prod = stock.consultPerId(2);
    console.log(`Produto de id 2: `, prod);

    prod = stock.consultPerId(8);           // null
    console.log("Produto de id 8: ", prod);

    stock.increaseStock(2, 20);

    prod = stock.consultPerId(2);
    console.log(`Produto de id 2: `, prod);

}

main();