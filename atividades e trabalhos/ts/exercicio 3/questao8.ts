
function main() : void {

    const array : number[] = [1, 2, 3, 4, 5];

    const foldedArray : number[] = array.map( value => value * 2);

    console.log("\nInitial array: ");
    console.log(array);

    console.log("\nFolded Array: ");
    console.log(foldedArray);

    const sum : number = array.reduce((current : number, sum : number) => sum += current, 0);

    console.log("\nsum of the values ​​of the initial array: " + sum);
}

main();