
function show(...values : string[]) : void {
    values.forEach(value => console.log(value));
}

function main() : void {

    show("hello", "world\n");
    show("Good", "morning", "john\n");
    show("Hello\n");

}

main();