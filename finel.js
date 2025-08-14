// Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
    if (fare <= 0 || typeof fare !== 'number') {
        return 'Invalid'
    }

    let charge = fare * (20 / 100) + 30;
    let totalCharge = fare + charge;
    return totalCharge;
}

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid'
    }

    let letters = str.split(" ").join("");
    let result = letters.toUpperCase();
    return result;
}

// Problem-03 : FIFA Best Team Award
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

// Problem-04: Same Same But Different
function  isSame(arr1 , arr2 ) {
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return 'Invalid'
    }
    else if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

// Problem-05: Exam Result Report Generator
function  resultReport( marks ) {
    if(Array.isArray(marks) === false){
        return 'Invalid'
    }

    let total = 0;
    let passed = 0;
    let faild = 0;
    for(let mark of marks){
        total = total + mark;
        if(mark >= 40){
            passed++;
        }
        else{
            faild++;
        }
    }
    
    let finalScore;
    if(marks.length === 0){
        finalScore = 0;
    }
    else{
        finalScore = Math.round(total / marks.length);
    }

    return{
        finalScore: finalScore,
        pass: passed,
        fail: faild
    };
}