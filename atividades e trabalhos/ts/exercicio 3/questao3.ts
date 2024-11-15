function formatArray( values : Array<number>) : string {

    let response : string = "";
    
    values.forEach((value : number, index : number) => {
        response += `${value}`;
        if(index < values.length-1)
            response += "-";
    });

    return response; 
}

function main() : void {

    const numbers : Array<number> = [1, 5, 6, 8, 10];
    console.log(formatArray(numbers));
}

main();