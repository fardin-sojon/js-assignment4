function totalFine(fare) {
    if (fare <= 0 || typeof fare !== 'number') {
        return 'Invalid'
    }

    let charge = fare * (20 / 100) + 30;
    let totalCharge = fare + charge;
    return totalCharge;
}

console.log(totalFine(200));