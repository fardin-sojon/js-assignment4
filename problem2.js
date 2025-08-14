function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid'
    }

    let letters = str.split(" ").join("");
    let result = letters.toUpperCase();
    return result;
}
console.log(onlyCharacter(["hack", "me"]));


