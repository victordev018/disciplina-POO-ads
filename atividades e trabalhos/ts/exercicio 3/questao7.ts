function getEvens(numbers : number[]) : number[] {
    const evens : number[] = numbers.filter( number => number % 2 == 0); 
    return evens;
}

function main() : void {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const evens = getEvens(array);

    console.log(evens);
}

main();