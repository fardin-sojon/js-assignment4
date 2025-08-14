
function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid'
    }

    let breakingTheRules1 = player1.foul + player1.cardY + player1.cardR;
    let breakingTheRules2 = player2.foul + player2.cardY + player2.cardR;

    if (breakingTheRules1 < breakingTheRules2) {
        return player1.name;
    }
    else if (breakingTheRules1 > breakingTheRules2) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
));
