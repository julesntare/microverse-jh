const beautifulDay = (s, e, d) => {
    let beautifulDaysArr = [];
    let eachTempRes, reverse;
    while (s <= e) {
        reverse = Number(s.toString().split("").reverse().join(""));
        eachTempRes = (s - reverse) / d;
        if (eachTempRes % 1 == 0) beautifulDaysArr.push(s);
        s += 1;
    }
    return beautifulDaysArr.length;
}

console.log(beautifulDay(20, 23, 6));