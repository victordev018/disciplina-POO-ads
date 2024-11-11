class Hotel {

    quantityReservations : number;

    constructor(quantityReservations: number){
        this.quantityReservations = quantityReservations;
    }

    addReservation() : void {
        this.quantityReservations++;
    }

}

function main() {
    let hotel : Hotel = new Hotel(2);
    console.log(hotel.quantityReservations);
}

main();