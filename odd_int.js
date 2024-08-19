function findOddInt(arr) {
    let result = [];
    for (const a of arr) {
        if (arr.filter(e => e === a).length % 2 !== 0) result.push(a)
    }
    return result.filter((v, i, a) => a.indexOf(v) === i);
}


console.log(findOddInt([7]));
console.log(findOddInt([0]));
console.log(findOddInt([1, 1, 2]));
console.log(findOddInt([0, 1, 0, 1, 0]));
console.log(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));