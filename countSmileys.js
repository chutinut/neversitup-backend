function countSmileys(arr) {
    let result = 0
    for (const data of arr) {
        if (data.split('').length === 2) {
            if (data.split('')[1] === ')' || data.split('')[1] === 'D') result = result + 1;
        } else if (data.split('').length === 3) {
            if ((data.split('')[1] === '-' || data.split('')[1] === '~') && ((data.split('')[2] === ')' || data.split('')[2] === 'D'))) result = result + 1;
        }
    }
    return result;
}
console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;