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

console.log(resultReport(100));


