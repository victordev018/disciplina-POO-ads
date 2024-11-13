
class Player {

    force : number;
    level : number;
    currentPoints : number;

    constructor(force: number, level : number, currentPoints : number){
        this.force = force;
        this.level = level;
        this.currentPoints = currentPoints;
    }

    calculateAttack() : number {
        return this.force * this.level;
    }

    attack(player : Player) : void {
        // checking if player is dead
        if(!player.isAlive()) return;
        player.currentPoints -= this.calculateAttack();
    }

    isAlive() : boolean {
        return this.currentPoints > 0;
    }

    toString() : string {
        return "\n- Force: " + this.force + "\n- Level: " + this.level + "\n- Points: " + this.currentPoints + "\n";
    }

}

function main() : void {

    // creating players instances
    const player1 : Player = new Player(10, 5, 86);
    const player2 : Player = new Player(12, 7, 62);

    console.log("\n- Data of players: ");
    console.log("Player 1: " + player1.toString());
    console.log("Player 2: " + player2.toString());
    
    player1.attack(player2);
    player2.attack(player1);
    
    console.log("\n- Data of players: ");
    console.log("Player 1: " + player1.toString());
    console.log("Player 2: " + player2.toString());
}

main();